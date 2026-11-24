import type { DefineComponent } from 'vue';

export interface BellCheckCircleRimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellCheckCircleRim: DefineComponent<BellCheckCircleRimProps>;

export default BellCheckCircleRim;
export { BellCheckCircleRim };
