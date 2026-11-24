import type { DefineComponent } from 'vue';

export interface BrowserCloudSunProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserCloudSun: DefineComponent<BrowserCloudSunProps>;

export default BrowserCloudSun;
export { BrowserCloudSun };
