import type { DefineComponent } from 'vue';

export interface HouseDoorArchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HouseDoorArch: DefineComponent<HouseDoorArchProps>;

export default HouseDoorArch;
export { HouseDoorArch };
