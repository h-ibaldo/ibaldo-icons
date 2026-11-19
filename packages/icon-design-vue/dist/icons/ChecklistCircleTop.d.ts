import type { DefineComponent } from 'vue';

export interface ChecklistCircleTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChecklistCircleTop: DefineComponent<ChecklistCircleTopProps>;

export default ChecklistCircleTop;
export { ChecklistCircleTop };
