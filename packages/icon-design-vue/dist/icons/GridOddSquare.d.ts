import type { DefineComponent } from 'vue';

export interface GridOddSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GridOddSquare: DefineComponent<GridOddSquareProps>;

export default GridOddSquare;
export { GridOddSquare };
