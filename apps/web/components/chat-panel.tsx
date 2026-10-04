'use client';

import { FormEvent, useState } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatPanel() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I am TOMI AI. Ask me to plan a task, generate code, or help you manage your work.',
    },
  ]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((previous) => [...previous, { role: 'user', content: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      setMessages((previous) => [...previous, { role: 'assistant', content: data.reply || 'No response received.' }]);
    } catch (error) {
      setMessages((previous) => [...previous, { role: 'assistant', content: 'I could not reach the TOMI backend. Please verify the API server is running.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="flex min-h-[700px] flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-glow backdrop-blur">
      <div className="border-b border-slate-800 bg-slate-950/60 px-5 py-4">
        <p className="text-sm font-medium text-slate-300">Conversation</p>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
              message.role === 'user'
                ? 'ml-auto bg-sky-600 text-white'
                : 'mr-auto border border-slate-700 bg-slate-800 text-slate-100'
            }`}
          >
            {message.content}
          </div>
        ))}

        {loading && (
          <div className="mr-auto max-w-[85%] rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-300">
            TOMI is thinking...
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="border-t border-slate-800 bg-slate-950/60 p-4">
        <div className="flex gap-3">
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            rows={3}
            placeholder="Ask TOMI for help..."
            className="w-full resize-none rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-sky-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </section>
  );
}
