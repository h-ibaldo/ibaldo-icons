import type { DefineComponent } from 'vue';

export interface CircleMotionDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CircleMotionDotted: DefineComponent<CircleMotionDottedProps>;

export default CircleMotionDotted;
export { CircleMotionDotted };
