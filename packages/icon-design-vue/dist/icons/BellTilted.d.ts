import type { DefineComponent } from 'vue';

export interface BellTiltedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellTilted: DefineComponent<BellTiltedProps>;

export default BellTilted;
export { BellTilted };
