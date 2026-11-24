import type { DefineComponent } from 'vue';

export interface PanelLeftRightDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PanelLeftRightDash: DefineComponent<PanelLeftRightDashProps>;

export default PanelLeftRightDash;
export { PanelLeftRightDash };
