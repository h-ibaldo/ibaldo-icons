import type { DefineComponent } from 'vue';

export interface MinimizeSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MinimizeSquare: DefineComponent<MinimizeSquareProps>;

export default MinimizeSquare;
export { MinimizeSquare };
