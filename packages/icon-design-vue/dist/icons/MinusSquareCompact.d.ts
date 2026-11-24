import type { DefineComponent } from 'vue';

export interface MinusSquareCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MinusSquareCompact: DefineComponent<MinusSquareCompactProps>;

export default MinusSquareCompact;
export { MinusSquareCompact };
