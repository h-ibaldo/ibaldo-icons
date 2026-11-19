import type { DefineComponent } from 'vue';

export interface BrowserGlobeMapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserGlobeMap: DefineComponent<BrowserGlobeMapProps>;

export default BrowserGlobeMap;
export { BrowserGlobeMap };
