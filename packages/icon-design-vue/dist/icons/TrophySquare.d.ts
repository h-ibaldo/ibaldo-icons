import type { DefineComponent } from 'vue';

export interface TrophySquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrophySquare: DefineComponent<TrophySquareProps>;

export default TrophySquare;
export { TrophySquare };
