# Local Autostart

This project is configured to start automatically after you log in to macOS.

To avoid a macOS `launchd` path-encoding issue with the original Chinese folder name, the system autostart uses these ASCII-only paths:

- `/Users/monster/personal-lab-site` -> project root
- `/Users/monster/bin/personal-lab-server.sh` -> server entry script
- `/Users/monster/bin/personal-lab-open.sh` -> browser opener script

## What runs

- `~/bin/personal-lab-server.sh`
- `~/bin/personal-lab-open.sh`
- LaunchAgent labels:
- `com.monster.personal-lab`
- `com.monster.personal-lab.open`
- URL: `http://localhost:3000`

## What the script does

1. Enters the project directory.
2. Rebuilds the app if possible.
3. Starts `next start -p 3000` as a persistent LaunchAgent service.
4. Waits for the site to respond in a separate opener agent.
5. Opens the site in the default browser.

## Logs

- `~/Library/Logs/personal-lab/build.log`
- `~/Library/Logs/personal-lab/server.log`
- `~/Library/Logs/personal-lab/launcher.log`
- `~/Library/Logs/personal-lab/launchd.out.log`
- `~/Library/Logs/personal-lab/launchd.err.log`

## Useful commands

```bash
launchctl print gui/$(id -u)/com.monster.personal-lab
launchctl print gui/$(id -u)/com.monster.personal-lab.open
launchctl kickstart -k gui/$(id -u)/com.monster.personal-lab
launchctl kickstart -k gui/$(id -u)/com.monster.personal-lab.open
launchctl bootout gui/$(id -u) ~/Library/LaunchAgents/com.monster.personal-lab.plist
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.monster.personal-lab.plist
launchctl bootout gui/$(id -u) ~/Library/LaunchAgents/com.monster.personal-lab.open.plist
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.monster.personal-lab.open.plist
```
