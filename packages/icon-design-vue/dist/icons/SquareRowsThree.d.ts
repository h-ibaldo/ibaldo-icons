import type { DefineComponent } from 'vue';

export interface SquareRowsThreeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareRowsThree: DefineComponent<SquareRowsThreeProps>;

export default SquareRowsThree;
export { SquareRowsThree };
