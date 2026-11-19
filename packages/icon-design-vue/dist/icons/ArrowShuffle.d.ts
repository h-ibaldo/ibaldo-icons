import type { DefineComponent } from 'vue';

export interface ArrowShuffleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowShuffle: DefineComponent<ArrowShuffleProps>;

export default ArrowShuffle;
export { ArrowShuffle };
