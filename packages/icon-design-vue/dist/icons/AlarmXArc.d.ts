import type { DefineComponent } from 'vue';

export interface AlarmXArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmXArc: DefineComponent<AlarmXArcProps>;

export default AlarmXArc;
export { AlarmXArc };
