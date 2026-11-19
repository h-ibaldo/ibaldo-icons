import type { DefineComponent } from 'vue';

export interface CloudSquareSignalRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSquareSignalRound: DefineComponent<CloudSquareSignalRoundProps>;

export default CloudSquareSignalRound;
export { CloudSquareSignalRound };
