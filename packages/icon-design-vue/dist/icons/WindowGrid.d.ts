import type { DefineComponent } from 'vue';

export interface WindowGridProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowGrid: DefineComponent<WindowGridProps>;

export default WindowGrid;
export { WindowGrid };
