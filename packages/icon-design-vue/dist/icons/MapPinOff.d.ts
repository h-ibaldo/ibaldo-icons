import type { DefineComponent } from 'vue';

export interface MapPinOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinOff: DefineComponent<MapPinOffProps>;

export default MapPinOff;
export { MapPinOff };
