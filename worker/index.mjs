export default {
  async fetch(request, env, ctx) {
    return new Response("Hello from OpenNext deployed on Cloudflare Worker!", {
      headers: { "Content-Type": "text/plain" },
    });
  },
};
