import type { DefineComponent } from 'vue';

export interface GearUploadHexProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearUploadHex: DefineComponent<GearUploadHexProps>;

export default GearUploadHex;
export { GearUploadHex };
