import type { DefineComponent } from 'vue';

export interface BuildingDoorWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BuildingDoorWide: DefineComponent<BuildingDoorWideProps>;

export default BuildingDoorWide;
export { BuildingDoorWide };
