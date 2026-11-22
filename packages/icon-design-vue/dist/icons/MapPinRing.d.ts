import type { DefineComponent } from 'vue';

export interface MapPinRingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinRing: DefineComponent<MapPinRingProps>;

export default MapPinRing;
export { MapPinRing };
