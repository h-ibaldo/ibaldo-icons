import type { DefineComponent } from 'vue';

export interface FormRadioDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormRadioDot: DefineComponent<FormRadioDotProps>;

export default FormRadioDot;
export { FormRadioDot };
