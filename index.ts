const server = Bun.serve({
  port: 3000,
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") return new Response("Home page!");
    if (url.pathname === "/blog") throw new Error("woops!");
    return new Response("404");
  },
  error(error) {
    return new Response(`<pre>${error}\n${error.stack}</pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});

console.log(`Listening on localhost: ${server.port}`);
