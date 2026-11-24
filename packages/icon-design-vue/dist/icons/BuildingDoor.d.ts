import type { DefineComponent } from 'vue';

export interface BuildingDoorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BuildingDoor: DefineComponent<BuildingDoorProps>;

export default BuildingDoor;
export { BuildingDoor };
