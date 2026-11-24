import type { DefineComponent } from 'vue';

export interface ChecklistUserProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChecklistUser: DefineComponent<ChecklistUserProps>;

export default ChecklistUser;
export { ChecklistUser };
