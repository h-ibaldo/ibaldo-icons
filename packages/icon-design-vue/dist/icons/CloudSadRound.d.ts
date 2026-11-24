import type { DefineComponent } from 'vue';

export interface CloudSadRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSadRound: DefineComponent<CloudSadRoundProps>;

export default CloudSadRound;
export { CloudSadRound };
