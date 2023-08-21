import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const config = {
  client: env.DATABASE_CLIENT,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
} as Knex.Config

if (env.DATABASE_CLIENT === 'sqlite') {
  config.connection = {
    filename: env.DATABASE_URL,
  }
} else {
  config.connection = env.DATABASE_URL
}

export const knex = setupKnex(config)
