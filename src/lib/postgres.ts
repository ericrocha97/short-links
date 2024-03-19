import postgres from 'postgres'

const postgresURL =
    process.env.DATABASE_URL ||
    'postgresql://docker:docker@localhost:5432/shortlinks'

export const sql = postgres(postgresURL)
