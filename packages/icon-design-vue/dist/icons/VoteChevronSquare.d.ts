import type { DefineComponent } from 'vue';

export interface VoteChevronSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VoteChevronSquare: DefineComponent<VoteChevronSquareProps>;

export default VoteChevronSquare;
export { VoteChevronSquare };
