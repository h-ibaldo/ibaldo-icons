import type { DefineComponent } from 'vue';

export interface StarPlusRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StarPlusRound: DefineComponent<StarPlusRoundProps>;

export default StarPlusRound;
export { StarPlusRound };
