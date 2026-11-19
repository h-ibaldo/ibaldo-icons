import type { DefineComponent } from 'vue';

export interface HourglassStandSandProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassStandSand: DefineComponent<HourglassStandSandProps>;

export default HourglassStandSand;
export { HourglassStandSand };
