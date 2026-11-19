import type { DefineComponent } from 'vue';

export interface ChecklistCircleTopTwoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChecklistCircleTopTwo: DefineComponent<ChecklistCircleTopTwoProps>;

export default ChecklistCircleTopTwo;
export { ChecklistCircleTopTwo };
