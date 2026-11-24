import type { DefineComponent } from 'vue';

export interface FormRadioCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormRadioCheck: DefineComponent<FormRadioCheckProps>;

export default FormRadioCheck;
export { FormRadioCheck };
