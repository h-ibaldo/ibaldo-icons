import type { DefineComponent } from 'vue';

export interface PollSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PollSquare: DefineComponent<PollSquareProps>;

export default PollSquare;
export { PollSquare };
