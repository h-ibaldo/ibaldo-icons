import type { DefineComponent } from 'vue';

export interface BellCheckCircleDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellCheckCircleDash: DefineComponent<BellCheckCircleDashProps>;

export default BellCheckCircleDash;
export { BellCheckCircleDash };
