import type { DefineComponent } from 'vue';

export interface LayoutPanelTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutPanelTop: DefineComponent<LayoutPanelTopProps>;

export default LayoutPanelTop;
export { LayoutPanelTop };
