import type { DefineComponent } from 'vue';

export interface ChecklistCircleEmptyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChecklistCircleEmpty: DefineComponent<ChecklistCircleEmptyProps>;

export default ChecklistCircleEmpty;
export { ChecklistCircleEmpty };
