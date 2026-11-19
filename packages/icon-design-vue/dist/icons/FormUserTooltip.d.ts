import type { DefineComponent } from 'vue';

export interface FormUserTooltipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormUserTooltip: DefineComponent<FormUserTooltipProps>;

export default FormUserTooltip;
export { FormUserTooltip };
