import type { DefineComponent } from 'vue';

export interface BellCheckCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellCheckCircle: DefineComponent<BellCheckCircleProps>;

export default BellCheckCircle;
export { BellCheckCircle };
