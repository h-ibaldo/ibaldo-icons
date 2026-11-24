import type { DefineComponent } from 'vue';

export interface PencilPlusDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilPlusDot: DefineComponent<PencilPlusDotProps>;

export default PencilPlusDot;
export { PencilPlusDot };
