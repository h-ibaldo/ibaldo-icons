import type { DefineComponent } from 'vue';

export interface SquareColumnsThreeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareColumnsThree: DefineComponent<SquareColumnsThreeProps>;

export default SquareColumnsThree;
export { SquareColumnsThree };
