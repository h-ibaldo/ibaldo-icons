import type { DefineComponent } from 'vue';

export interface FormInputCursorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormInputCursor: DefineComponent<FormInputCursorProps>;

export default FormInputCursor;
export { FormInputCursor };
