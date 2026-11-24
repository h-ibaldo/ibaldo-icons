import type { DefineComponent } from 'vue';

export interface BuildingCityCorniceProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BuildingCityCornice: DefineComponent<BuildingCityCorniceProps>;

export default BuildingCityCornice;
export { BuildingCityCornice };
