import type { DefineComponent } from 'vue';

export interface CircleCrescentProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CircleCrescent: DefineComponent<CircleCrescentProps>;

export default CircleCrescent;
export { CircleCrescent };
