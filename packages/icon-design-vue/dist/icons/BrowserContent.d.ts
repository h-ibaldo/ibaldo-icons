import type { DefineComponent } from 'vue';

export interface BrowserContentProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserContent: DefineComponent<BrowserContentProps>;

export default BrowserContent;
export { BrowserContent };
