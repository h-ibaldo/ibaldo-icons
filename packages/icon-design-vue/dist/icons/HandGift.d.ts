import type { DefineComponent } from 'vue';

export interface HandGiftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandGift: DefineComponent<HandGiftProps>;

export default HandGift;
export { HandGift };
