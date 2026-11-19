import type { DefineComponent } from 'vue';

export interface BuildingGableProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BuildingGable: DefineComponent<BuildingGableProps>;

export default BuildingGable;
export { BuildingGable };
