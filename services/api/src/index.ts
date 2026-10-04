import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { chatRoute } from './routes/chat.js';

const app = express();
const PORT = Number(process.env.PORT ?? 4000);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'TOMI API', timestamp: new Date().toISOString() });
});

app.use('/api', chatRoute);

app.listen(PORT, () => {
  console.log(`TOMI API listening on http://localhost:${PORT}`);
});
