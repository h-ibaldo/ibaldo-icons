import type { DefineComponent } from 'vue';

export interface AlarmPlusBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmPlusBare: DefineComponent<AlarmPlusBareProps>;

export default AlarmPlusBare;
export { AlarmPlusBare };
