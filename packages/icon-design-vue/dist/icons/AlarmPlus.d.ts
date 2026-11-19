import type { DefineComponent } from 'vue';

export interface AlarmPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmPlus: DefineComponent<AlarmPlusProps>;

export default AlarmPlus;
export { AlarmPlus };
