import { Injectable } from '@nestjs/common';
import { HashingProvider } from './hashing.provider';
import * as bycrypt from 'bcrypt';
@Injectable()
export class BcryptProvider implements HashingProvider {
  hashPassword(data: string | Buffer): Promise<string> {
    throw new Error('Method not implemented.');
  }
  comparePasswords(data: string | Buffer, encrypted: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
