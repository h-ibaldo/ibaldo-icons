import type { DefineComponent } from 'vue';

export interface GridNineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GridNine: DefineComponent<GridNineProps>;

export default GridNine;
export { GridNine };
