import type { DefineComponent } from 'vue';

export interface GiftStripedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GiftStriped: DefineComponent<GiftStripedProps>;

export default GiftStriped;
export { GiftStriped };
