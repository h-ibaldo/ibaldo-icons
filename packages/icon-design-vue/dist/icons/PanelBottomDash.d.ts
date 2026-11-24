import type { DefineComponent } from 'vue';

export interface PanelBottomDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PanelBottomDash: DefineComponent<PanelBottomDashProps>;

export default PanelBottomDash;
export { PanelBottomDash };
