import type { DefineComponent } from 'vue';

export interface GridCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GridCircle: DefineComponent<GridCircleProps>;

export default GridCircle;
export { GridCircle };
