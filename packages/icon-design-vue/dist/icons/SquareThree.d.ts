import type { DefineComponent } from 'vue';

export interface SquareThreeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareThree: DefineComponent<SquareThreeProps>;

export default SquareThree;
export { SquareThree };
