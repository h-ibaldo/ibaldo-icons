import type { DefineComponent } from 'vue';

export interface CircleConcentricXSProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CircleConcentricXS: DefineComponent<CircleConcentricXSProps>;

export default CircleConcentricXS;
export { CircleConcentricXS };
