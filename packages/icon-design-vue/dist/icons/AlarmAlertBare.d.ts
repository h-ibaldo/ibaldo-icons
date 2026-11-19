import type { DefineComponent } from 'vue';

export interface AlarmAlertBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmAlertBare: DefineComponent<AlarmAlertBareProps>;

export default AlarmAlertBare;
export { AlarmAlertBare };
