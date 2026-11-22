import type { DefineComponent } from 'vue';

export interface MapPinNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinNarrow: DefineComponent<MapPinNarrowProps>;

export default MapPinNarrow;
export { MapPinNarrow };
