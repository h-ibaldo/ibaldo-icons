import type { DefineComponent } from 'vue';

export interface MapPinPlusCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinPlusCorner: DefineComponent<MapPinPlusCornerProps>;

export default MapPinPlusCorner;
export { MapPinPlusCorner };
