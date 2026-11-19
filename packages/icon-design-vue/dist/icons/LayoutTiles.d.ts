import type { DefineComponent } from 'vue';

export interface LayoutTilesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutTiles: DefineComponent<LayoutTilesProps>;

export default LayoutTiles;
export { LayoutTiles };
