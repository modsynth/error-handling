/**
 * Error logging utilities
 */

export interface ErrorLog {
  message: string;
  stack?: string;
  timestamp: number;
  url: string;
  userAgent: string;
}

export class ErrorLogger {
  private logs: ErrorLog[] = [];
  private maxLogs: number;

  constructor(maxLogs: number = 100) {
    this.maxLogs = maxLogs;
  }

  log(error: Error): void {
    const errorLog: ErrorLog = {
      message: error.message,
      stack: error.stack,
      timestamp: Date.now(),
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    };

    this.logs.push(errorLog);

    // Keep only last N logs
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    // Log to console in development
    if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'development') {
      console.error('[ErrorLogger]', errorLog);
    }
  }

  getLogs(): ErrorLog[] {
    return [...this.logs];
  }

  clear(): void {
    this.logs = [];
  }

  async sendToServer(endpoint: string): Promise<void> {
    if (this.logs.length === 0) return;

    try {
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ errors: this.logs }),
      });
      this.clear();
    } catch (error) {
      console.error('Failed to send error logs:', error);
    }
  }
}

export const errorLogger = new ErrorLogger();
