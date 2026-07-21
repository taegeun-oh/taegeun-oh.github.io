import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the current site navigation without a Code page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Vision &amp; Autonomous Intelligence Lab/);
  assert.match(html, /href="\/research"/);
  assert.match(html, /href="\/publications"/);
  assert.doesNotMatch(html, /href="\/code"/);
  assert.doesNotMatch(html, /Browse research code/);
});

test("starts Research with topics and includes all four illustrations", async () => {
  const response = await render("/research");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /research-detail-list research-first/);
  assert.match(html, /Autonomous systems &amp; mission intelligence/);
  assert.match(html, /research-autonomy\.webp/);
  assert.match(html, /research-path-planning\.webp/);
  assert.match(html, /research-perception\.webp/);
  assert.match(html, /research-image-quality\.webp/);
  assert.doesNotMatch(html, /Systems that move/);
});

test("starts Publications with the list and renders index badges", async () => {
  const response = await render("/publications");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /publication-section publication-first/);
  assert.match(html, /index-scie/);
  assert.match(html, /index-scopus/);
  assert.match(html, /index-kci/);
  assert.doesNotMatch(html, /Ideas, tested/);
});
