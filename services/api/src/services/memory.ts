export type MemoryEntry = {
  id: string;
  type: 'user-preference' | 'project' | 'conversation' | 'task';
  content: string;
  createdAt: string;
};

class MemoryStore {
  private entries: MemoryEntry[] = [];

  remember(entry: Omit<MemoryEntry, 'id' | 'createdAt'>) {
    this.entries.unshift({
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...entry,
    });
  }

  getAll() {
    return [...this.entries].slice(0, 30);
  }

  getSummary() {
    return this.entries
      .slice(0, 8)
      .map((entry) => `${entry.type}: ${entry.content}`)
      .join('\n');
  }
}

export const memoryStore = new MemoryStore();
