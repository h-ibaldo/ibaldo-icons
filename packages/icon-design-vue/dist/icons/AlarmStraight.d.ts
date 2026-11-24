import type { DefineComponent } from 'vue';

export interface AlarmStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmStraight: DefineComponent<AlarmStraightProps>;

export default AlarmStraight;
export { AlarmStraight };
