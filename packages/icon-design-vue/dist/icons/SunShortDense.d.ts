import type { DefineComponent } from 'vue';

export interface SunShortDenseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunShortDense: DefineComponent<SunShortDenseProps>;

export default SunShortDense;
export { SunShortDense };
