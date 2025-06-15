
import AutoFormBot from '@/components/AutoFormBot';

export default function AutoFormBotPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-primary">AutoFormBot</h1>
          <p className="text-muted-foreground">AI-powered legal form filling assistant</p>
        </div>
      </header>
      
      <main className="py-8">
        <AutoFormBot />
      </main>
      
      <footer className="border-t border-border bg-card mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          AutoFormBot - Powered by GenAI | Not legal advice - For demonstration purposes only
        </div>
      </footer>
    </div>
  );
}
