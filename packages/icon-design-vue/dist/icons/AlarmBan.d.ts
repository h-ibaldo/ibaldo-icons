import type { DefineComponent } from 'vue';

export interface AlarmBanProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmBan: DefineComponent<AlarmBanProps>;

export default AlarmBan;
export { AlarmBan };
