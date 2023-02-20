import { Module } from '@nestjs/common';
import { PowerModule } from 'power/power.module';
import { PowerService } from 'power/power.service';
import { DiskService } from './disk.service';

@Module({
  imports: [PowerModule],
  providers: [DiskService],
  exports: [DiskService],
})
export class DiskModule {}
