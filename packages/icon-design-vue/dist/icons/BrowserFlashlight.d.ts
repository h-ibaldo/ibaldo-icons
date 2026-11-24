import type { DefineComponent } from 'vue';

export interface BrowserFlashlightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserFlashlight: DefineComponent<BrowserFlashlightProps>;

export default BrowserFlashlight;
export { BrowserFlashlight };
