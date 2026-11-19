import type { DefineComponent } from 'vue';

export interface GridProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Grid: DefineComponent<GridProps>;

export default Grid;
export { Grid };
