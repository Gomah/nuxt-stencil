export async function renderStencil({ renderToString, html, options }): Promise<any> {
  return renderToString(html, {
    ...options,
  });
}
