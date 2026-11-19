import type { DefineComponent } from 'vue';

export interface FormUserDropProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormUserDrop: DefineComponent<FormUserDropProps>;

export default FormUserDrop;
export { FormUserDrop };
