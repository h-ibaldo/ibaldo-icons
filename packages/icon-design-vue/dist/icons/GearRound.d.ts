import type { DefineComponent } from 'vue';

export interface GearRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearRound: DefineComponent<GearRoundProps>;

export default GearRound;
export { GearRound };
