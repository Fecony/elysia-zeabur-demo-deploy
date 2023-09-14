import { Elysia } from 'elysia';

const app = new Elysia()
  .get('/', () => 'Hello Elysia')
  .listen(Bun.env.PORT || 3000, ({ hostname, port }) => {
    console.log(`🦊 Elysia is running at ${hostname}:${port}`);
  });
