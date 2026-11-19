import type { DefineComponent } from 'vue';

export interface CloudXRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudXRound: DefineComponent<CloudXRoundProps>;

export default CloudXRound;
export { CloudXRound };
