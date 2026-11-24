import type { DefineComponent } from 'vue';

export interface MapPinEditProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinEdit: DefineComponent<MapPinEditProps>;

export default MapPinEdit;
export { MapPinEdit };
