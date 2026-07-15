#!/bin/zsh

set -euo pipefail

export PATH="/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"

PROJECT_DIR="/Users/monster/personal-lab-site"
PORT="3000"
URL="http://127.0.0.1:${PORT}"
LOG_DIR="${HOME}/Library/Logs/personal-lab"
OPEN_MARKER="${TMPDIR:-/tmp}/personal-lab-opened"

mkdir -p "${LOG_DIR}"
cd "${PROJECT_DIR}"

if [ ! -d "node_modules" ]; then
  echo "node_modules is missing in ${PROJECT_DIR}" >&2
  exit 1
fi

if [ -f ".next/BUILD_ID" ]; then
  if ! /usr/local/bin/npm run build >>"${LOG_DIR}/build.log" 2>&1; then
    echo "$(date '+%Y-%m-%d %H:%M:%S') build failed, reusing the last successful build" >>"${LOG_DIR}/launcher.log"
  fi
else
  /usr/local/bin/npm run build >>"${LOG_DIR}/build.log" 2>&1
fi

/usr/local/bin/npm run start >>"${LOG_DIR}/server.log" 2>&1 &
SERVER_PID=$!

cleanup() {
  if kill -0 "${SERVER_PID}" 2>/dev/null; then
    kill "${SERVER_PID}" 2>/dev/null || true
    wait "${SERVER_PID}" 2>/dev/null || true
  fi
}

trap cleanup INT TERM EXIT

for _ in {1..60}; do
  if curl -sf "${URL}" >/dev/null; then
    if [ ! -f "${OPEN_MARKER}" ]; then
      touch "${OPEN_MARKER}"
      open "${URL}"
    fi

    wait "${SERVER_PID}"
    exit $?
  fi

  sleep 1
done

echo "Server did not become ready at ${URL}" >&2
exit 1
