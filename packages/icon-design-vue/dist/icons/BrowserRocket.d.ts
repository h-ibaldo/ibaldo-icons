import type { DefineComponent } from 'vue';

export interface BrowserRocketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserRocket: DefineComponent<BrowserRocketProps>;

export default BrowserRocket;
export { BrowserRocket };
