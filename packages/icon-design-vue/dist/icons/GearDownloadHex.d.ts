import type { DefineComponent } from 'vue';

export interface GearDownloadHexProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearDownloadHex: DefineComponent<GearDownloadHexProps>;

export default GearDownloadHex;
export { GearDownloadHex };
