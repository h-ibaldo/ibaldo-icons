import type { DefineComponent } from 'vue';

export interface CircleOverlapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CircleOverlap: DefineComponent<CircleOverlapProps>;

export default CircleOverlap;
export { CircleOverlap };
