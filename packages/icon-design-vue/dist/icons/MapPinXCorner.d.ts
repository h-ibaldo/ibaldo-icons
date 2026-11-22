import type { DefineComponent } from 'vue';

export interface MapPinXCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinXCorner: DefineComponent<MapPinXCornerProps>;

export default MapPinXCorner;
export { MapPinXCorner };
