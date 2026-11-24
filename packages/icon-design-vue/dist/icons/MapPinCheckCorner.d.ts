import type { DefineComponent } from 'vue';

export interface MapPinCheckCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinCheckCorner: DefineComponent<MapPinCheckCornerProps>;

export default MapPinCheckCorner;
export { MapPinCheckCorner };
