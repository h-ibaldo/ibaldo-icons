import type { DefineComponent } from 'vue';

export interface RewindSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RewindSquare: DefineComponent<RewindSquareProps>;

export default RewindSquare;
export { RewindSquare };
