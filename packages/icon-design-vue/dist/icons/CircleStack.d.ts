import type { DefineComponent } from 'vue';

export interface CircleStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CircleStack: DefineComponent<CircleStackProps>;

export default CircleStack;
export { CircleStack };
