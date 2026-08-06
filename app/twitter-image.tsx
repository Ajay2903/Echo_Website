import { alt, contentType, renderOgCard, size } from "./lib/ogCard";

export { alt, contentType, size };

export default async function TwitterImage() {
  return renderOgCard();
}
