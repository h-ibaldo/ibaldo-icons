import type { DefineComponent } from 'vue';

export interface MapPinXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinX: DefineComponent<MapPinXProps>;

export default MapPinX;
export { MapPinX };
