import type { DefineComponent } from 'vue';

export interface StarMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StarMinus: DefineComponent<StarMinusProps>;

export default StarMinus;
export { StarMinus };
