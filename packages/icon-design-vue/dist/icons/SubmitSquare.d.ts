import type { DefineComponent } from 'vue';

export interface SubmitSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SubmitSquare: DefineComponent<SubmitSquareProps>;

export default SubmitSquare;
export { SubmitSquare };
