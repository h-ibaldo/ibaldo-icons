import type { DefineComponent } from 'vue';

export interface PauseSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PauseSquare: DefineComponent<PauseSquareProps>;

export default PauseSquare;
export { PauseSquare };
