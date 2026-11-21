import type { DefineComponent } from 'vue';

export interface SatelliteDishTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SatelliteDishTall: DefineComponent<SatelliteDishTallProps>;

export default SatelliteDishTall;
export { SatelliteDishTall };
