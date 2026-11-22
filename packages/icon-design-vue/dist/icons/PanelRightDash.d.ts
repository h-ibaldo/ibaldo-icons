import type { DefineComponent } from 'vue';

export interface PanelRightDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PanelRightDash: DefineComponent<PanelRightDashProps>;

export default PanelRightDash;
export { PanelRightDash };
