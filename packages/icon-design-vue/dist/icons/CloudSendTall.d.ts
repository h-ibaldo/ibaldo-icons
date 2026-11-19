import type { DefineComponent } from 'vue';

export interface CloudSendTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSendTall: DefineComponent<CloudSendTallProps>;

export default CloudSendTall;
export { CloudSendTall };
