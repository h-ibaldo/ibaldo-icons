import type { DefineComponent } from 'vue';

export interface MapPinMinusCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinMinusCorner: DefineComponent<MapPinMinusCornerProps>;

export default MapPinMinusCorner;
export { MapPinMinusCorner };
