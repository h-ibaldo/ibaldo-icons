import type { DefineComponent } from 'vue';

export interface AlarmCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmCheck: DefineComponent<AlarmCheckProps>;

export default AlarmCheck;
export { AlarmCheck };
