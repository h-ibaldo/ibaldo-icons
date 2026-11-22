import type { DefineComponent } from 'vue';

export interface MapPinSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinSearch: DefineComponent<MapPinSearchProps>;

export default MapPinSearch;
export { MapPinSearch };
