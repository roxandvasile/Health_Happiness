export function onRequest({ request }) {
  const url = new URL(request.url);

  if (url.hostname.endsWith(".pages.dev")) {
    return new Response("Not Found", { status: 404 });
  }

  return fetch(request);
}
