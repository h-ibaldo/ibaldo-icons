import type { DefineComponent } from 'vue';

export interface StarXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StarX: DefineComponent<StarXProps>;

export default StarX;
export { StarX };
