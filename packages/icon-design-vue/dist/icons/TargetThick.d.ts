import type { DefineComponent } from 'vue';

export interface TargetThickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TargetThick: DefineComponent<TargetThickProps>;

export default TargetThick;
export { TargetThick };
