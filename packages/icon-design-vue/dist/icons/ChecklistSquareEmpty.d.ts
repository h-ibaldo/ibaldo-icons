import type { DefineComponent } from 'vue';

export interface ChecklistSquareEmptyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChecklistSquareEmpty: DefineComponent<ChecklistSquareEmptyProps>;

export default ChecklistSquareEmpty;
export { ChecklistSquareEmpty };
