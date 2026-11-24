import type { DefineComponent } from 'vue';

export interface AlarmAlertStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmAlertStraight: DefineComponent<AlarmAlertStraightProps>;

export default AlarmAlertStraight;
export { AlarmAlertStraight };
