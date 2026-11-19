import type { DefineComponent } from 'vue';

export interface AlarmMinusBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmMinusBare: DefineComponent<AlarmMinusBareProps>;

export default AlarmMinusBare;
export { AlarmMinusBare };
