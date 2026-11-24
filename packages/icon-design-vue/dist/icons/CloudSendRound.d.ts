import type { DefineComponent } from 'vue';

export interface CloudSendRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSendRound: DefineComponent<CloudSendRoundProps>;

export default CloudSendRound;
export { CloudSendRound };
