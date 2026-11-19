import type { DefineComponent } from 'vue';

export interface StarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Star: DefineComponent<StarProps>;

export default Star;
export { Star };
