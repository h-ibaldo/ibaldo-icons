import type { DefineComponent } from 'vue';

export interface MapPinPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinPlus: DefineComponent<MapPinPlusProps>;

export default MapPinPlus;
export { MapPinPlus };
