import type { DefineComponent } from 'vue';

export interface HouseDoorGroundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HouseDoorGround: DefineComponent<HouseDoorGroundProps>;

export default HouseDoorGround;
export { HouseDoorGround };
