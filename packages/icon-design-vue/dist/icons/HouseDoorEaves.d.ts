import type { DefineComponent } from 'vue';

export interface HouseDoorEavesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HouseDoorEaves: DefineComponent<HouseDoorEavesProps>;

export default HouseDoorEaves;
export { HouseDoorEaves };
