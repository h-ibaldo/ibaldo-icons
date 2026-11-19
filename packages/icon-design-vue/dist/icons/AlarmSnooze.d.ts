import type { DefineComponent } from 'vue';

export interface AlarmSnoozeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmSnooze: DefineComponent<AlarmSnoozeProps>;

export default AlarmSnooze;
export { AlarmSnooze };
