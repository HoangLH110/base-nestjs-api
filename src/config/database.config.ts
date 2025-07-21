import { DataSource } from 'typeorm';

export const connection = new DataSource({
  host: '',
  username: '',
  password: '',
  database: '',
  type: 'postgres',
  entities: [],
  synchronize: true,
  //   migrations: ['dist/migrations/*.js', 'src/migration/*.ts'],
});
