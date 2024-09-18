import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  constructor() {
    super({
      log: ['query', 'info', 'warn'],
    });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
