import type { DefineComponent } from 'vue';

export interface CircleConcentricXLProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CircleConcentricXL: DefineComponent<CircleConcentricXLProps>;

export default CircleConcentricXL;
export { CircleConcentricXL };
