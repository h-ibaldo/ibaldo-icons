import type { DefineComponent } from 'vue';

export interface HourglassStandProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassStand: DefineComponent<HourglassStandProps>;

export default HourglassStand;
export { HourglassStand };
