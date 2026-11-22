import type { DefineComponent } from 'vue';

export interface MapPinCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinCheck: DefineComponent<MapPinCheckProps>;

export default MapPinCheck;
export { MapPinCheck };
