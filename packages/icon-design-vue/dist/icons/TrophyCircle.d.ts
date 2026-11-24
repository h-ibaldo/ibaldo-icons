import type { DefineComponent } from 'vue';

export interface TrophyCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrophyCircle: DefineComponent<TrophyCircleProps>;

export default TrophyCircle;
export { TrophyCircle };
