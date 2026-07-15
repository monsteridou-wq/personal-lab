export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-display text-base font-semibold text-foreground">
              AI Personal Lab
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              用工程师的眼睛看世界，用 AI 做实验。
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
