import type { DefineComponent } from 'vue';

export interface StarPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StarPlus: DefineComponent<StarPlusProps>;

export default StarPlus;
export { StarPlus };
