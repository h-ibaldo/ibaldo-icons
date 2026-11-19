import type { DefineComponent } from 'vue';

export interface StopCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StopCircle: DefineComponent<StopCircleProps>;

export default StopCircle;
export { StopCircle };
