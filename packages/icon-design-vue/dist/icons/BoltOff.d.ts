import type { DefineComponent } from 'vue';

export interface BoltOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoltOff: DefineComponent<BoltOffProps>;

export default BoltOff;
export { BoltOff };
