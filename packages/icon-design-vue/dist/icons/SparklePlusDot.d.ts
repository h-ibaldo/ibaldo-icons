import type { DefineComponent } from 'vue';

export interface SparklePlusDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SparklePlusDot: DefineComponent<SparklePlusDotProps>;

export default SparklePlusDot;
export { SparklePlusDot };
