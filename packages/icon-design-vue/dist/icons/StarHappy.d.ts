import type { DefineComponent } from 'vue';

export interface StarHappyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StarHappy: DefineComponent<StarHappyProps>;

export default StarHappy;
export { StarHappy };
