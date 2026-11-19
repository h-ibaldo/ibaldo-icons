import type { DefineComponent } from 'vue';

export interface LayoutTilesEmptyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutTilesEmpty: DefineComponent<LayoutTilesEmptyProps>;

export default LayoutTilesEmpty;
export { LayoutTilesEmpty };
