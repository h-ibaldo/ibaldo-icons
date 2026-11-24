import type { DefineComponent } from 'vue';

export interface SunDottedDenseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunDottedDense: DefineComponent<SunDottedDenseProps>;

export default SunDottedDense;
export { SunDottedDense };
