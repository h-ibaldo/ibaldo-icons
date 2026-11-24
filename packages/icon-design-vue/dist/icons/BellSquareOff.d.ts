import type { DefineComponent } from 'vue';

export interface BellSquareOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellSquareOff: DefineComponent<BellSquareOffProps>;

export default BellSquareOff;
export { BellSquareOff };
