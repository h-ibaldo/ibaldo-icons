import type { DefineComponent } from 'vue';

export interface BuildingAnnexDoorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BuildingAnnexDoor: DefineComponent<BuildingAnnexDoorProps>;

export default BuildingAnnexDoor;
export { BuildingAnnexDoor };
