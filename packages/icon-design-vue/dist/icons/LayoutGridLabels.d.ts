import type { DefineComponent } from 'vue';

export interface LayoutGridLabelsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutGridLabels: DefineComponent<LayoutGridLabelsProps>;

export default LayoutGridLabels;
export { LayoutGridLabels };
