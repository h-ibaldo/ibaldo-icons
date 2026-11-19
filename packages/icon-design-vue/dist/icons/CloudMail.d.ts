import type { DefineComponent } from 'vue';

export interface CloudMailProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudMail: DefineComponent<CloudMailProps>;

export default CloudMail;
export { CloudMail };
