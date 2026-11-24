import type { DefineComponent } from 'vue';

export interface BellOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellOff: DefineComponent<BellOffProps>;

export default BellOff;
export { BellOff };
