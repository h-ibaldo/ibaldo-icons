import type { DefineComponent } from 'vue';

export interface ChecklistTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChecklistTop: DefineComponent<ChecklistTopProps>;

export default ChecklistTop;
export { ChecklistTop };
