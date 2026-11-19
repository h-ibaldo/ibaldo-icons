import type { DefineComponent } from 'vue';

export interface PanelRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PanelRight: DefineComponent<PanelRightProps>;

export default PanelRight;
export { PanelRight };
