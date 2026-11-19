import type { DefineComponent } from 'vue';

export interface FormLockTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormLockTooltip: DefineComponent<FormLockTooltipProps>;

export default FormLockTooltip;
export { FormLockTooltip };
