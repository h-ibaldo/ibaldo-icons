import type { DefineComponent } from 'vue';

export interface HandTapSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandTapSquare: DefineComponent<HandTapSquareProps>;

export default HandTapSquare;
export { HandTapSquare };
