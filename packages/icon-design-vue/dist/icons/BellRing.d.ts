import type { DefineComponent } from 'vue';

export interface BellRingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellRing: DefineComponent<BellRingProps>;

export default BellRing;
export { BellRing };
