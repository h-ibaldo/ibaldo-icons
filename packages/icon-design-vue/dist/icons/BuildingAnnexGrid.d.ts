import type { DefineComponent } from 'vue';

export interface BuildingAnnexGridProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BuildingAnnexGrid: DefineComponent<BuildingAnnexGridProps>;

export default BuildingAnnexGrid;
export { BuildingAnnexGrid };
