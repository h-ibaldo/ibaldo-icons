import type { DefineComponent } from 'vue';

export interface CloudSquareRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSquareRound: DefineComponent<CloudSquareRoundProps>;

export default CloudSquareRound;
export { CloudSquareRound };
