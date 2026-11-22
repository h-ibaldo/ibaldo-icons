import type { DefineComponent } from 'vue';

export interface MapPinDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinDot: DefineComponent<MapPinDotProps>;

export default MapPinDot;
export { MapPinDot };
