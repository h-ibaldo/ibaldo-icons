import type { DefineComponent } from 'vue';

export interface StarCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StarCheck: DefineComponent<StarCheckProps>;

export default StarCheck;
export { StarCheck };
