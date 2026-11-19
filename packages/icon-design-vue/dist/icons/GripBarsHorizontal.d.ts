import type { DefineComponent } from 'vue';

export interface GripBarsHorizontalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GripBarsHorizontal: DefineComponent<GripBarsHorizontalProps>;

export default GripBarsHorizontal;
export { GripBarsHorizontal };
