import type { DefineComponent } from 'vue';

export interface ArrowOrbitAxisProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowOrbitAxis: DefineComponent<ArrowOrbitAxisProps>;

export default ArrowOrbitAxis;
export { ArrowOrbitAxis };
