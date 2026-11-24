import type { DefineComponent } from 'vue';

export interface SunDenseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunDense: DefineComponent<SunDenseProps>;

export default SunDense;
export { SunDense };
