import type { DefineComponent } from 'vue';

export interface BoltOffTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoltOffTilted: DefineComponent<BoltOffTiltedProps>;

export default BoltOffTilted;
export { BoltOffTilted };
