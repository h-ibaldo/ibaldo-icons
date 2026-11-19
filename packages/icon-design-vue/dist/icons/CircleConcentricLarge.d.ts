import type { DefineComponent } from 'vue';

export interface CircleConcentricLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CircleConcentricLarge: DefineComponent<CircleConcentricLargeProps>;

export default CircleConcentricLarge;
export { CircleConcentricLarge };
