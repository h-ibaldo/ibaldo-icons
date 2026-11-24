import type { DefineComponent } from 'vue';

export interface MapPinBaseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinBase: DefineComponent<MapPinBaseProps>;

export default MapPinBase;
export { MapPinBase };
