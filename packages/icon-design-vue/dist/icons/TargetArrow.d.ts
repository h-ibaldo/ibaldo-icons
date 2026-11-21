import type { DefineComponent } from 'vue';

export interface TargetArrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TargetArrow: DefineComponent<TargetArrowProps>;

export default TargetArrow;
export { TargetArrow };
