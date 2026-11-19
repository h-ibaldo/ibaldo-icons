import type { DefineComponent } from 'vue';

export interface SkipBackCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SkipBackCircle: DefineComponent<SkipBackCircleProps>;

export default SkipBackCircle;
export { SkipBackCircle };
