import type { DefineComponent } from 'vue';

export interface PercentCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PercentCircle: DefineComponent<PercentCircleProps>;

export default PercentCircle;
export { PercentCircle };
