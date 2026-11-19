import type { DefineComponent } from 'vue';

export interface AlarmBoltStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmBoltStraight: DefineComponent<AlarmBoltStraightProps>;

export default AlarmBoltStraight;
export { AlarmBoltStraight };
