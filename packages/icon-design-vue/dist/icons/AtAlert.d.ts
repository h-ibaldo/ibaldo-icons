import type { DefineComponent } from 'vue';

export interface AtAlertProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtAlert: DefineComponent<AtAlertProps>;

export default AtAlert;
export { AtAlert };
