import type { DefineComponent } from 'vue';

export interface FormInputNumberDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormInputNumberDots: DefineComponent<FormInputNumberDotsProps>;

export default FormInputNumberDots;
export { FormInputNumberDots };
