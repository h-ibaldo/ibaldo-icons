import type { DefineComponent } from 'vue';

export interface CircleCrescentDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CircleCrescentDashed: DefineComponent<CircleCrescentDashedProps>;

export default CircleCrescentDashed;
export { CircleCrescentDashed };
