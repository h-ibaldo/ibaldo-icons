import type { DefineComponent } from 'vue';

export interface BrowserLightbulbProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserLightbulb: DefineComponent<BrowserLightbulbProps>;

export default BrowserLightbulb;
export { BrowserLightbulb };
