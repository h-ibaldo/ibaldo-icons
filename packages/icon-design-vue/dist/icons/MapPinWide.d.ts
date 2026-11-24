import type { DefineComponent } from 'vue';

export interface MapPinWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinWide: DefineComponent<MapPinWideProps>;

export default MapPinWide;
export { MapPinWide };
