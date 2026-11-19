import type { DefineComponent } from 'vue';

export interface TrophyRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrophyRound: DefineComponent<TrophyRoundProps>;

export default TrophyRound;
export { TrophyRound };
