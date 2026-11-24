import type { DefineComponent } from 'vue';

export interface PanelTopDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PanelTopDash: DefineComponent<PanelTopDashProps>;

export default PanelTopDash;
export { PanelTopDash };
