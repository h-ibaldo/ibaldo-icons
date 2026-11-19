import type { DefineComponent } from 'vue';

export interface HouseDoorArchPentagonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HouseDoorArchPentagon: DefineComponent<HouseDoorArchPentagonProps>;

export default HouseDoorArchPentagon;
export { HouseDoorArchPentagon };
