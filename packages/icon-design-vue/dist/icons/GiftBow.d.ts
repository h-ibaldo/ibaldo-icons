import type { DefineComponent } from 'vue';

export interface GiftBowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GiftBow: DefineComponent<GiftBowProps>;

export default GiftBow;
export { GiftBow };
