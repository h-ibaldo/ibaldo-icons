import type { DefineComponent } from 'vue';

export interface AsteriskSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AsteriskSquare: DefineComponent<AsteriskSquareProps>;

export default AsteriskSquare;
export { AsteriskSquare };
