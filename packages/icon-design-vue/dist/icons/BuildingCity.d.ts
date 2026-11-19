import type { DefineComponent } from 'vue';

export interface BuildingCityProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BuildingCity: DefineComponent<BuildingCityProps>;

export default BuildingCity;
export { BuildingCity };
