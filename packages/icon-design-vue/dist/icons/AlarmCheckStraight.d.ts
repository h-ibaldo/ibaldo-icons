import type { DefineComponent } from 'vue';

export interface AlarmCheckStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmCheckStraight: DefineComponent<AlarmCheckStraightProps>;

export default AlarmCheckStraight;
export { AlarmCheckStraight };
