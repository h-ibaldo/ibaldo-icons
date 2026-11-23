import type { DefineComponent } from 'vue';

export interface PercentCircleDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PercentCircleDot: DefineComponent<PercentCircleDotProps>;

export default PercentCircleDot;
export { PercentCircleDot };
