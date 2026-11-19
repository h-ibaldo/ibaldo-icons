import type { DefineComponent } from 'vue';

export interface BrowserFlashlightOnProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserFlashlightOn: DefineComponent<BrowserFlashlightOnProps>;

export default BrowserFlashlightOn;
export { BrowserFlashlightOn };
