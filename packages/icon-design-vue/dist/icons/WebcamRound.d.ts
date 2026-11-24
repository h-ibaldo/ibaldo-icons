import type { DefineComponent } from 'vue';

export interface WebcamRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WebcamRound: DefineComponent<WebcamRoundProps>;

export default WebcamRound;
export { WebcamRound };
