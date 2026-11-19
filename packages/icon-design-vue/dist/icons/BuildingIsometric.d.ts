import type { DefineComponent } from 'vue';

export interface BuildingIsometricProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BuildingIsometric: DefineComponent<BuildingIsometricProps>;

export default BuildingIsometric;
export { BuildingIsometric };
