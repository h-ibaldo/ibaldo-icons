import type { DefineComponent } from 'vue';

export interface BrowserFlowerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserFlower: DefineComponent<BrowserFlowerProps>;

export default BrowserFlower;
export { BrowserFlower };
