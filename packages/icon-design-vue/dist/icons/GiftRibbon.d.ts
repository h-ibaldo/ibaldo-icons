import type { DefineComponent } from 'vue';

export interface GiftRibbonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GiftRibbon: DefineComponent<GiftRibbonProps>;

export default GiftRibbon;
export { GiftRibbon };
