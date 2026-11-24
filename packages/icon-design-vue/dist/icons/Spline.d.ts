import type { DefineComponent } from 'vue';

export interface SplineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Spline: DefineComponent<SplineProps>;

export default Spline;
export { Spline };
