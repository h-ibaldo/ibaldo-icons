import type { DefineComponent } from 'vue';

export interface StarPlusCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StarPlusCenter: DefineComponent<StarPlusCenterProps>;

export default StarPlusCenter;
export { StarPlusCenter };
