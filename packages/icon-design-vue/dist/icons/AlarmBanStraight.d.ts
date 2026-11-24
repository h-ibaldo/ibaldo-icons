import type { DefineComponent } from 'vue';

export interface AlarmBanStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmBanStraight: DefineComponent<AlarmBanStraightProps>;

export default AlarmBanStraight;
export { AlarmBanStraight };
