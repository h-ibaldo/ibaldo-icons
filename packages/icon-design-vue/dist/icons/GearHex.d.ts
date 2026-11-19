import type { DefineComponent } from 'vue';

export interface GearHexProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearHex: DefineComponent<GearHexProps>;

export default GearHex;
export { GearHex };
