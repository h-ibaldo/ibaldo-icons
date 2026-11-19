import type { DefineComponent } from 'vue';

export interface ArrowOrbitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowOrbit: DefineComponent<ArrowOrbitProps>;

export default ArrowOrbit;
export { ArrowOrbit };
