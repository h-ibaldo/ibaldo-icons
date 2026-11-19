import type { DefineComponent } from 'vue';

export interface AlarmPieStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmPieStraight: DefineComponent<AlarmPieStraightProps>;

export default AlarmPieStraight;
export { AlarmPieStraight };
