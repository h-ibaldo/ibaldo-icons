import type { DefineComponent } from 'vue';

export interface CloudAlertTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudAlertTall: DefineComponent<CloudAlertTallProps>;

export default CloudAlertTall;
export { CloudAlertTall };
