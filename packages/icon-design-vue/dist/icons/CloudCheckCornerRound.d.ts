import type { DefineComponent } from 'vue';

export interface CloudCheckCornerRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudCheckCornerRound: DefineComponent<CloudCheckCornerRoundProps>;

export default CloudCheckCornerRound;
export { CloudCheckCornerRound };
