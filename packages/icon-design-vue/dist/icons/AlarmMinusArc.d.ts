import type { DefineComponent } from 'vue';

export interface AlarmMinusArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmMinusArc: DefineComponent<AlarmMinusArcProps>;

export default AlarmMinusArc;
export { AlarmMinusArc };
