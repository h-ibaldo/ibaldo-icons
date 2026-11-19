import type { DefineComponent } from 'vue';

export interface HouseDoorChimneyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HouseDoorChimney: DefineComponent<HouseDoorChimneyProps>;

export default HouseDoorChimney;
export { HouseDoorChimney };
