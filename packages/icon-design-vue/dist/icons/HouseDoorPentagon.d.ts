import type { DefineComponent } from 'vue';

export interface HouseDoorPentagonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HouseDoorPentagon: DefineComponent<HouseDoorPentagonProps>;

export default HouseDoorPentagon;
export { HouseDoorPentagon };
