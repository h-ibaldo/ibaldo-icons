import type { DefineComponent } from 'vue';

export interface MapPinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPin: DefineComponent<MapPinProps>;

export default MapPin;
export { MapPin };
