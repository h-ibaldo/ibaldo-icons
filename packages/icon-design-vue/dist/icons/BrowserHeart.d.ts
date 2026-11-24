import type { DefineComponent } from 'vue';

export interface BrowserHeartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserHeart: DefineComponent<BrowserHeartProps>;

export default BrowserHeart;
export { BrowserHeart };
