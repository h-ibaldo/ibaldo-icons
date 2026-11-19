import type { DefineComponent } from 'vue';

export interface ChecklistSquareBottomProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChecklistSquareBottom: DefineComponent<ChecklistSquareBottomProps>;

export default ChecklistSquareBottom;
export { ChecklistSquareBottom };
