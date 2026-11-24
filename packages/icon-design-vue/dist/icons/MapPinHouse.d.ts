import type { DefineComponent } from 'vue';

export interface MapPinHouseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinHouse: DefineComponent<MapPinHouseProps>;

export default MapPinHouse;
export { MapPinHouse };
