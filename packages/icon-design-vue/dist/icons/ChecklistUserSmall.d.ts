import type { DefineComponent } from 'vue';

export interface ChecklistUserSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChecklistUserSmall: DefineComponent<ChecklistUserSmallProps>;

export default ChecklistUserSmall;
export { ChecklistUserSmall };
