import type { DefineComponent } from 'vue';

export interface CircleConcentricProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CircleConcentric: DefineComponent<CircleConcentricProps>;

export default CircleConcentric;
export { CircleConcentric };
