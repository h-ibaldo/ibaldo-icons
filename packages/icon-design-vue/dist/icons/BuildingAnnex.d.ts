import type { DefineComponent } from 'vue';

export interface BuildingAnnexProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BuildingAnnex: DefineComponent<BuildingAnnexProps>;

export default BuildingAnnex;
export { BuildingAnnex };
