import type { DefineComponent } from 'vue';

export interface BellCheckCircleFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellCheckCircleFlat: DefineComponent<BellCheckCircleFlatProps>;

export default BellCheckCircleFlat;
export { BellCheckCircleFlat };
