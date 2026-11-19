import type { DefineComponent } from 'vue';

export interface GearStackSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearStackSquare: DefineComponent<GearStackSquareProps>;

export default GearStackSquare;
export { GearStackSquare };
