import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleChatMessage, handleConsultancyAnalysis } from './server/api.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '20mb' }));

// API endpoints
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const text = await handleChatMessage(message || '');
    res.json({ text });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/consultancy', async (req, res) => {
  try {
    const { base64Image } = req.body;
    const result = await handleConsultancyAnalysis(base64Image || '');
    res.json({ result });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Serve static frontend in production
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Havilah Lash Studio server running on port ${port}`);
});
