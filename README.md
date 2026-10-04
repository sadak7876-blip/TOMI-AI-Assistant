# TOMI AI

TOMI AI is a personal AI assistant and agent platform designed to understand natural Bangla and English, plan tasks, use tools, remember preferences, and operate across web, desktop, and mobile surfaces.

This repository is the Phase 1 foundation for TOMI AI:
- premium chat UI
- secure Gemini backend proxy
- memory layer
- task scaffolding
- multi-device-ready architecture

## Architecture overview

- Frontend: Next.js web app
- Backend: Express API with secure Gemini proxy
- Memory: in-memory store with room to expand to Postgres/Redis/vector memory
- Agent layer: modular tool and execution architecture
- Security: all Gemini requests stay on the backend, never exposed client-side

## Quick start

1. Copy `.env.example` to `.env`
2. Add your `GEMINI_API_KEY`
3. Install dependencies:

```bash
npm install
```

4. Run the app:

```bash
npm run dev
```

This starts:
- web app on http://localhost:3000
- API on http://localhost:4000

## Environment variables

```bash
GEMINI_API_KEY=your_google_ai_api_key
PORT=4000
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## Phase roadmap

### Phase 1
- chat UI
- Gemini backend integration
- basic memory
- settings and tasks scaffolding

### Phase 2
- voice input/output
- Bangla + English speech
- interruption handling

### Phase 3
- agent mode
- tool selection
- research and coding workspace

### Phase 4
- desktop agent
- browser and file control
- secure execution policies

### Phase 5+
- mobile sync
- remote commands
- notifications
- proactive automation

## Important security rule

Dangerous actions are not directly granted to the model. All privileged actions must go through permission-checked tool layers.

## License
MIT
