import type { DefineComponent } from 'vue';

export interface CircleDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CircleDashed: DefineComponent<CircleDashedProps>;

export default CircleDashed;
export { CircleDashed };
