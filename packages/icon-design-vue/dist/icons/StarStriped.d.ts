import type { DefineComponent } from 'vue';

export interface StarStripedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StarStriped: DefineComponent<StarStripedProps>;

export default StarStriped;
export { StarStriped };
