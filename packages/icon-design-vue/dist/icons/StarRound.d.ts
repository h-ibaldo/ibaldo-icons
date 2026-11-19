import type { DefineComponent } from 'vue';

export interface StarRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StarRound: DefineComponent<StarRoundProps>;

export default StarRound;
export { StarRound };
