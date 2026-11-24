import type { DefineComponent } from 'vue';

export interface SkipBackDoubleThickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SkipBackDoubleThick: DefineComponent<SkipBackDoubleThickProps>;

export default SkipBackDoubleThick;
export { SkipBackDoubleThick };
