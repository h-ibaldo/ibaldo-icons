import type { DefineComponent } from 'vue';

export interface HourglassSandFallingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HourglassSandFalling: DefineComponent<HourglassSandFallingProps>;

export default HourglassSandFalling;
export { HourglassSandFalling };
