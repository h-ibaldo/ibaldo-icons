import type { DefineComponent } from 'vue';

export interface AlarmBoltArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmBoltArc: DefineComponent<AlarmBoltArcProps>;

export default AlarmBoltArc;
export { AlarmBoltArc };
