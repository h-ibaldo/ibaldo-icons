import type { DefineComponent } from 'vue';

export interface AlarmArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmArc: DefineComponent<AlarmArcProps>;

export default AlarmArc;
export { AlarmArc };
