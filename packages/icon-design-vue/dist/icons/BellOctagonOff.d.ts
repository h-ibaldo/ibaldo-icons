import type { DefineComponent } from 'vue';

export interface BellOctagonOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellOctagonOff: DefineComponent<BellOctagonOffProps>;

export default BellOctagonOff;
export { BellOctagonOff };
