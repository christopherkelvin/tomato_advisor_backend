import { Injectable } from '@nestjs/common';
import { HashingProvider } from './hashing.provider';
import * as bycrypt from 'bcrypt';
@Injectable()
export class BcryptProvider implements HashingProvider {
  public async hashPassword(data: string | Buffer): Promise<string> {
    //Generate Salt
    const salt = await bycrypt.genSalt();
    //Hash Password
    return bycrypt.hash(data, salt);
  }
  comparePasswords(data: string | Buffer, encrypted: string): Promise<boolean> {
    return bycrypt.compare(data, encrypted);
  }
}
