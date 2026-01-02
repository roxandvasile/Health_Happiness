export function onRequest({ request }) {
  const url = new URL(request.url);

  if (url.hostname.endsWith(".pages.dev")) {
    return new Response("Page Not Found", { status: 404 });
  }

  return fetch(request);
}

export function onRequest({ request }) {
  const url = new URL(request.url);

  if (url.hostname.endsWith(".pages.dev")) {
    url.hostname = "cabinetrecuperare.ro";
    return Response.redirect(url.toString(), 301);
  }

  return fetch(request);
}
