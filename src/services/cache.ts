interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const memoryCache = new Map<string, CacheEntry<any>>();

export function getCached<T>(key: string, ttlMs: number = 15 * 60 * 1000): T | null {
  // Check memory cache
  const memEntry = memoryCache.get(key);
  const now = Date.now();
  if (memEntry && now - memEntry.timestamp < ttlMs) {
    return memEntry.data as T;
  }

  // Check sessionStorage if available
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const stored = window.sessionStorage.getItem(`cache_${key}`);
      if (stored) {
        const parsed: CacheEntry<T> = JSON.parse(stored);
        if (now - parsed.timestamp < ttlMs) {
          memoryCache.set(key, parsed);
          return parsed.data;
        }
      }
    }
  } catch {
    // Ignore storage errors
  }

  return null;
}

export function setCached<T>(key: string, data: T): void {
  const entry: CacheEntry<T> = { data, timestamp: Date.now() };
  memoryCache.set(key, entry);

  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.setItem(`cache_${key}`, JSON.stringify(entry));
    }
  } catch {
    // Ignore storage quota errors
  }
}
