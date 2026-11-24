import type { DefineComponent } from 'vue';

export interface LayoutPanelTopUnevenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutPanelTopUneven: DefineComponent<LayoutPanelTopUnevenProps>;

export default LayoutPanelTopUneven;
export { LayoutPanelTopUneven };
