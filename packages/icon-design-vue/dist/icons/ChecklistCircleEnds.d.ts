import type { DefineComponent } from 'vue';

export interface ChecklistCircleEndsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChecklistCircleEnds: DefineComponent<ChecklistCircleEndsProps>;

export default ChecklistCircleEnds;
export { ChecklistCircleEnds };
