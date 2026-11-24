import type { DefineComponent } from 'vue';

export interface PanelBottomProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PanelBottom: DefineComponent<PanelBottomProps>;

export default PanelBottom;
export { PanelBottom };
