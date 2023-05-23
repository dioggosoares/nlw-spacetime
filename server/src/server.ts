import 'dotenv/config'

import { resolve } from 'node:path'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import { fastifyStatic } from '@fastify/static'

import { memoriesRoutes } from './routes/memories'
import { usersRoutes } from './routes/users'
import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'

const app = fastify()

app.register(multipart)

app.register(fastifyStatic, {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'jAU5x8ZkQaOgP8oDZ6vz4ag6ynIFFwhwn3Q/WTleXmk=',
})

app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)
app.register(usersRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server listening on port 3333')
  })
