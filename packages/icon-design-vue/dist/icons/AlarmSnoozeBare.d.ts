import type { DefineComponent } from 'vue';

export interface AlarmSnoozeBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmSnoozeBare: DefineComponent<AlarmSnoozeBareProps>;

export default AlarmSnoozeBare;
export { AlarmSnoozeBare };
