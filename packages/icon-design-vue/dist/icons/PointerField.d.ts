import type { DefineComponent } from 'vue';

export interface PointerFieldProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerField: DefineComponent<PointerFieldProps>;

export default PointerField;
export { PointerField };
