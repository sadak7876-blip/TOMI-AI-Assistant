import ChatPanel from '@/components/chat-panel';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 p-4 md:p-8">
        <header className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 shadow-glow backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Personal AI</p>
            <h1 className="text-2xl font-bold text-white">TOMI AI</h1>
          </div>
          <div className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            Agent Online
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <ChatPanel />

          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="mb-3 text-sm font-semibold text-slate-200">Status</p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>✓ Gemini connected via backend</li>
                <li>✓ Memory enabled</li>
                <li>✓ Task layer ready</li>
                <li>✓ Secure tool architecture</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="mb-3 text-sm font-semibold text-slate-200">Capabilities</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Chat</li>
                <li>• Bangla + English</li>
                <li>• Memory</li>
                <li>• Agent planning</li>
                <li>• Voice-ready</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
