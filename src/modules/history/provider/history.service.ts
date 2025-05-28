import { Injectable } from '@nestjs/common';

@Injectable()
export class HistoryService {
  getHistory(userId: string) {
    return `History for user ${userId}`;
  }
}
