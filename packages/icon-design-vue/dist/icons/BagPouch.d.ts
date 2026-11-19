import type { DefineComponent } from 'vue';

export interface BagPouchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BagPouch: DefineComponent<BagPouchProps>;

export default BagPouch;
export { BagPouch };
