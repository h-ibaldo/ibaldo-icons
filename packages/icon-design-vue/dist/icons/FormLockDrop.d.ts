import type { DefineComponent } from 'vue';

export interface FormLockDropProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FormLockDrop: DefineComponent<FormLockDropProps>;

export default FormLockDrop;
export { FormLockDrop };
