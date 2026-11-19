import type { DefineComponent } from 'vue';

export interface CircleOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CircleOff: DefineComponent<CircleOffProps>;

export default CircleOff;
export { CircleOff };
