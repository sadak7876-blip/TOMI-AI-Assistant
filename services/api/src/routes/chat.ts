import { Router } from 'express';
import { z } from 'zod';
import { generateGeminiReply } from '../services/gemini.js';
import { memoryStore } from '../services/memory.js';

const router = Router();

const chatRequestSchema = z.object({
  message: z.string().min(1),
});

router.post('/chat', async (req, res) => {
  try {
    const parsed = chatRequestSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid request body.' });
    }

    const userMessage = parsed.data.message;

    memoryStore.remember({
      type: 'conversation',
      content: userMessage,
    });

    const contextSummary = memoryStore.getSummary();
    const reply = await generateGeminiReply(userMessage, contextSummary);

    memoryStore.remember({
      type: 'conversation',
      content: reply,
    });

    res.json({
      ok: true,
      reply,
      memory: memoryStore.getAll(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected server error';
    res.status(500).json({ ok: false, error: message });
  }
});

router.get('/memory', (_req, res) => {
  res.json({ ok: true, memory: memoryStore.getAll() });
});

router.post('/memory', (req, res) => {
  const { type, content } = req.body ?? {};
  if (!type || !content) {
    return res.status(400).json({ ok: false, error: 'type and content are required' });
  }

  memoryStore.remember({
    type: type as any,
    content: String(content),
  });

  res.json({ ok: true, memory: memoryStore.getAll() });
});

export const chatRoute = router;
