import type { DefineComponent } from 'vue';

export interface SatelliteDishProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SatelliteDish: DefineComponent<SatelliteDishProps>;

export default SatelliteDish;
export { SatelliteDish };
