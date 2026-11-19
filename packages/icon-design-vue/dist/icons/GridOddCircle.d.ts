import type { DefineComponent } from 'vue';

export interface GridOddCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GridOddCircle: DefineComponent<GridOddCircleProps>;

export default GridOddCircle;
export { GridOddCircle };
