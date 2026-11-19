import type { DefineComponent } from 'vue';

export interface AlarmCheckArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmCheckArc: DefineComponent<AlarmCheckArcProps>;

export default AlarmCheckArc;
export { AlarmCheckArc };
