import type { DefineComponent } from 'vue';

export interface AlarmPlusStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmPlusStraight: DefineComponent<AlarmPlusStraightProps>;

export default AlarmPlusStraight;
export { AlarmPlusStraight };
