import type { DefineComponent } from 'vue';

export interface GridPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GridPlus: DefineComponent<GridPlusProps>;

export default GridPlus;
export { GridPlus };
