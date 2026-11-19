import type { DefineComponent } from 'vue';

export interface CircleMotionProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CircleMotion: DefineComponent<CircleMotionProps>;

export default CircleMotion;
export { CircleMotion };
