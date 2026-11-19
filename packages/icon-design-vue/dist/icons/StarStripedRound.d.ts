import type { DefineComponent } from 'vue';

export interface StarStripedRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StarStripedRound: DefineComponent<StarStripedRoundProps>;

export default StarStripedRound;
export { StarStripedRound };
