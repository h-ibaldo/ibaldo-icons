import type { DefineComponent } from 'vue';

export interface MapPinMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinMinus: DefineComponent<MapPinMinusProps>;

export default MapPinMinus;
export { MapPinMinus };
