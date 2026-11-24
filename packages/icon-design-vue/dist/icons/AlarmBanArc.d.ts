import type { DefineComponent } from 'vue';

export interface AlarmBanArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmBanArc: DefineComponent<AlarmBanArcProps>;

export default AlarmBanArc;
export { AlarmBanArc };
