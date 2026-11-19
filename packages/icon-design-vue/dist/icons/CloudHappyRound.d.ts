import type { DefineComponent } from 'vue';

export interface CloudHappyRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudHappyRound: DefineComponent<CloudHappyRoundProps>;

export default CloudHappyRound;
export { CloudHappyRound };
