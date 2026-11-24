import type { DefineComponent } from 'vue';

export interface HouseDoorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HouseDoor: DefineComponent<HouseDoorProps>;

export default HouseDoor;
export { HouseDoor };
