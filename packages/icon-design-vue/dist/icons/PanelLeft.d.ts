import type { DefineComponent } from 'vue';

export interface PanelLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PanelLeft: DefineComponent<PanelLeftProps>;

export default PanelLeft;
export { PanelLeft };
