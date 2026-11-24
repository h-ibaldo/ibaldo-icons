import type { DefineComponent } from 'vue';

export interface CircleConcentricSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CircleConcentricSmall: DefineComponent<CircleConcentricSmallProps>;

export default CircleConcentricSmall;
export { CircleConcentricSmall };
