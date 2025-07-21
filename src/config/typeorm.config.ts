import { DataSource } from 'typeorm';
import { connection } from './database.config';
import { Logger } from '@nestjs/common';

export class Source {
  static dataSource: DataSource;

  static async setConnect() {
    try {
      await connection
        .initialize()
        .then(() => {
          Logger.log('Data Source has been initialized!');
        })
        .catch((err) => {
          Logger.error('Error during Data Source initialization', err);
        });
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }
}
