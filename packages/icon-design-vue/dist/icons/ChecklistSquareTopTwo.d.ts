import type { DefineComponent } from 'vue';

export interface ChecklistSquareTopTwoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChecklistSquareTopTwo: DefineComponent<ChecklistSquareTopTwoProps>;

export default ChecklistSquareTopTwo;
export { ChecklistSquareTopTwo };
