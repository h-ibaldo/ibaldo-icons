import type { DefineComponent } from 'vue';

export interface BellCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellCircle: DefineComponent<BellCircleProps>;

export default BellCircle;
export { BellCircle };
