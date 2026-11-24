import type { DefineComponent } from 'vue';

export interface ChecklistSquareEndsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChecklistSquareEnds: DefineComponent<ChecklistSquareEndsProps>;

export default ChecklistSquareEnds;
export { ChecklistSquareEnds };
