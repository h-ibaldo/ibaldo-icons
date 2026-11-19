import type { DefineComponent } from 'vue';

export interface AlarmProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Alarm: DefineComponent<AlarmProps>;

export default Alarm;
export { Alarm };
