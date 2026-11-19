import type { DefineComponent } from 'vue';

export interface ChecklistCircleBottomProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChecklistCircleBottom: DefineComponent<ChecklistCircleBottomProps>;

export default ChecklistCircleBottom;
export { ChecklistCircleBottom };
