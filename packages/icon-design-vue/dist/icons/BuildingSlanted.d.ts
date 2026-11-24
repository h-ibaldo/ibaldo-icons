import type { DefineComponent } from 'vue';

export interface BuildingSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BuildingSlanted: DefineComponent<BuildingSlantedProps>;

export default BuildingSlanted;
export { BuildingSlanted };
