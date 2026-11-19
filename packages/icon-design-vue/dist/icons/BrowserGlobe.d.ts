import type { DefineComponent } from 'vue';

export interface BrowserGlobeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserGlobe: DefineComponent<BrowserGlobeProps>;

export default BrowserGlobe;
export { BrowserGlobe };
