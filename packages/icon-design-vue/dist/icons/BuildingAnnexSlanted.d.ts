import type { DefineComponent } from 'vue';

export interface BuildingAnnexSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BuildingAnnexSlanted: DefineComponent<BuildingAnnexSlantedProps>;

export default BuildingAnnexSlanted;
export { BuildingAnnexSlanted };
