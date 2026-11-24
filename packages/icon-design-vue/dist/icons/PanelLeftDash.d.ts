import type { DefineComponent } from 'vue';

export interface PanelLeftDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PanelLeftDash: DefineComponent<PanelLeftDashProps>;

export default PanelLeftDash;
export { PanelLeftDash };
