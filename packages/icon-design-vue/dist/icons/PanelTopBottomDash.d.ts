import type { DefineComponent } from 'vue';

export interface PanelTopBottomDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PanelTopBottomDash: DefineComponent<PanelTopBottomDashProps>;

export default PanelTopBottomDash;
export { PanelTopBottomDash };
