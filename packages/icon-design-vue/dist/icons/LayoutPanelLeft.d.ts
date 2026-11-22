import type { DefineComponent } from 'vue';

export interface LayoutPanelLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutPanelLeft: DefineComponent<LayoutPanelLeftProps>;

export default LayoutPanelLeft;
export { LayoutPanelLeft };
