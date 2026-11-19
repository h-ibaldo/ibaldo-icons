import type { DefineComponent } from 'vue';

export interface BuildingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Building: DefineComponent<BuildingProps>;

export default Building;
export { Building };
