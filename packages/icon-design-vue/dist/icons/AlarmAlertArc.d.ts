import type { DefineComponent } from 'vue';

export interface AlarmAlertArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmAlertArc: DefineComponent<AlarmAlertArcProps>;

export default AlarmAlertArc;
export { AlarmAlertArc };
