import type { DefineComponent } from 'vue';

export interface AlarmSnoozeArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmSnoozeArc: DefineComponent<AlarmSnoozeArcProps>;

export default AlarmSnoozeArc;
export { AlarmSnoozeArc };
