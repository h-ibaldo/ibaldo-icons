import type { DefineComponent } from 'vue';

export interface AlarmPieArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmPieArc: DefineComponent<AlarmPieArcProps>;

export default AlarmPieArc;
export { AlarmPieArc };
