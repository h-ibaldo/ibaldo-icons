import type { DefineComponent } from 'vue';

export interface LayoutContinuousProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutContinuous: DefineComponent<LayoutContinuousProps>;

export default LayoutContinuous;
export { LayoutContinuous };
