import { createClient } from 'redis'

const redisURL = process.env.REDIS_URL || 'redis://:docker@localhost:6379'

export const redis = createClient({
    url: redisURL,
})

redis.connect()
