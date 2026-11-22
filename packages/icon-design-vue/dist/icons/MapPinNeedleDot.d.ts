import type { DefineComponent } from 'vue';

export interface MapPinNeedleDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinNeedleDot: DefineComponent<MapPinNeedleDotProps>;

export default MapPinNeedleDot;
export { MapPinNeedleDot };
