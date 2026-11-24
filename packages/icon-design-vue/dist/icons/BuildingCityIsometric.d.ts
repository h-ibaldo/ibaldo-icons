import type { DefineComponent } from 'vue';

export interface BuildingCityIsometricProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BuildingCityIsometric: DefineComponent<BuildingCityIsometricProps>;

export default BuildingCityIsometric;
export { BuildingCityIsometric };
