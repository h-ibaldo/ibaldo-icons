import type { DefineComponent } from 'vue';

export interface CloudXCornerRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudXCornerRound: DefineComponent<CloudXCornerRoundProps>;

export default CloudXCornerRound;
export { CloudXCornerRound };
