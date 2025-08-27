import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ChatPayload {
  messages: { role: string; content: string }[];
  sessionId?: string;
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  private base = ''; // keep blank when using proxy
  constructor(private http: HttpClient) {}

  send(messages: { role: string; content: string }[], sessionId?: string): Observable<{ reply: string }> {
    const payload: ChatPayload = { messages, sessionId };
    return this.http.post<{ reply: string }>(`${this.base}/api/chat`, payload);
  }

  saveJournal(sessionId: string, entry: string) {
    return this.http.post(`${this.base}/api/journal`, { sessionId, entry, timestamp: new Date().toISOString() });
  }
}
