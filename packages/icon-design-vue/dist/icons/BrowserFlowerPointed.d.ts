import type { DefineComponent } from 'vue';

export interface BrowserFlowerPointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserFlowerPointed: DefineComponent<BrowserFlowerPointedProps>;

export default BrowserFlowerPointed;
export { BrowserFlowerPointed };
