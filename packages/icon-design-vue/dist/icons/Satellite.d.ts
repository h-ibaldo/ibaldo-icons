import type { DefineComponent } from 'vue';

export interface SatelliteProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Satellite: DefineComponent<SatelliteProps>;

export default Satellite;
export { Satellite };
