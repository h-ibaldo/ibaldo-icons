import type { DefineComponent } from 'vue';

export interface FormLabelsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormLabels: DefineComponent<FormLabelsProps>;

export default FormLabels;
export { FormLabels };
