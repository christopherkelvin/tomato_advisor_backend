import { Controller, Get, Param } from '@nestjs/common';
import { HistoryService } from './provider/history.service';
@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}
  @Get('/:userId')
  getHistory(@Param('userId') userId: string) {
    return this.historyService.getHistory(userId);
  }
}
