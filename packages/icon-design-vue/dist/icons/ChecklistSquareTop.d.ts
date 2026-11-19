import type { DefineComponent } from 'vue';

export interface ChecklistSquareTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChecklistSquareTop: DefineComponent<ChecklistSquareTopProps>;

export default ChecklistSquareTop;
export { ChecklistSquareTop };
