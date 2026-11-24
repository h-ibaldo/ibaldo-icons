import type { DefineComponent } from 'vue';

export interface AlarmPlusArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmPlusArc: DefineComponent<AlarmPlusArcProps>;

export default AlarmPlusArc;
export { AlarmPlusArc };
