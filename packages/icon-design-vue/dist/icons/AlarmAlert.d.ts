import type { DefineComponent } from 'vue';

export interface AlarmAlertProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmAlert: DefineComponent<AlarmAlertProps>;

export default AlarmAlert;
export { AlarmAlert };
