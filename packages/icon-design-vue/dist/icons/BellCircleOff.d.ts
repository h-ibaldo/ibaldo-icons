import type { DefineComponent } from 'vue';

export interface BellCircleOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellCircleOff: DefineComponent<BellCircleOffProps>;

export default BellCircleOff;
export { BellCircleOff };
