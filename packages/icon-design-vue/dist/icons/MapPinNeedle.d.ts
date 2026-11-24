import type { DefineComponent } from 'vue';

export interface MapPinNeedleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinNeedle: DefineComponent<MapPinNeedleProps>;

export default MapPinNeedle;
export { MapPinNeedle };
