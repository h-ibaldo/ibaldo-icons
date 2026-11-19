import type { DefineComponent } from 'vue';

export interface PollHorizontalSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PollHorizontalSquare: DefineComponent<PollHorizontalSquareProps>;

export default PollHorizontalSquare;
export { PollHorizontalSquare };
