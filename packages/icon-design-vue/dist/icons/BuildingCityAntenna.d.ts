import type { DefineComponent } from 'vue';

export interface BuildingCityAntennaProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BuildingCityAntenna: DefineComponent<BuildingCityAntennaProps>;

export default BuildingCityAntenna;
export { BuildingCityAntenna };
