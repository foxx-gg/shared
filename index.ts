export * from './flags';
export * from './constants';
export * from './arenas';

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const get = (from, selector) => selector.replace(/\[([^\[\]]*)\]/g, ".$1.").split(".").filter((t) => t !== "").reduce((prev, cur) => prev && prev[cur], from);
