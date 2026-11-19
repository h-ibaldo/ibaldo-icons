import type { DefineComponent } from 'vue';

export interface CircleSplitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CircleSplit: DefineComponent<CircleSplitProps>;

export default CircleSplit;
export { CircleSplit };
