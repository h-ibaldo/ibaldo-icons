import type { DefineComponent } from 'vue';

export interface GridRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GridRounded: DefineComponent<GridRoundedProps>;

export default GridRounded;
export { GridRounded };
