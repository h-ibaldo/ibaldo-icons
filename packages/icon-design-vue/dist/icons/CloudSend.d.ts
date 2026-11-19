import type { DefineComponent } from 'vue';

export interface CloudSendProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSend: DefineComponent<CloudSendProps>;

export default CloudSend;
export { CloudSend };
