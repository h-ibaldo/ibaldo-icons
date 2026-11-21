import type { DefineComponent } from 'vue';

export interface TargetProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Target: DefineComponent<TargetProps>;

export default Target;
export { Target };
