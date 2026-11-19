import type { DefineComponent } from 'vue';

export interface FormRadioProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormRadio: DefineComponent<FormRadioProps>;

export default FormRadio;
export { FormRadio };
