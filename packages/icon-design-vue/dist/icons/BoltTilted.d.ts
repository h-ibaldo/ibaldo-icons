import type { DefineComponent } from 'vue';

export interface BoltTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoltTilted: DefineComponent<BoltTiltedProps>;

export default BoltTilted;
export { BoltTilted };
