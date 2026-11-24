import type { DefineComponent } from 'vue';

export interface TrophyPointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrophyPointed: DefineComponent<TrophyPointedProps>;

export default TrophyPointed;
export { TrophyPointed };
