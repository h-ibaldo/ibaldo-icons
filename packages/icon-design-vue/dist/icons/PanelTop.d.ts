import type { DefineComponent } from 'vue';

export interface PanelTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PanelTop: DefineComponent<PanelTopProps>;

export default PanelTop;
export { PanelTop };
