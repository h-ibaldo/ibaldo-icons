import type { DefineComponent } from 'vue';

export interface StarHalfProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StarHalf: DefineComponent<StarHalfProps>;

export default StarHalf;
export { StarHalf };
