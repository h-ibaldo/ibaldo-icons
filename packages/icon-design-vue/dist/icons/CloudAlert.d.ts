import type { DefineComponent } from 'vue';

export interface CloudAlertProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudAlert: DefineComponent<CloudAlertProps>;

export default CloudAlert;
export { CloudAlert };
