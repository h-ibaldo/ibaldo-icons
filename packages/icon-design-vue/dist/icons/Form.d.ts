import type { DefineComponent } from 'vue';

export interface FormProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Form: DefineComponent<FormProps>;

export default Form;
export { Form };
