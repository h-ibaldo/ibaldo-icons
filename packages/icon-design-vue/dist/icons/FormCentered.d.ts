import type { DefineComponent } from 'vue';

export interface FormCenteredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormCentered: DefineComponent<FormCenteredProps>;

export default FormCentered;
export { FormCentered };
