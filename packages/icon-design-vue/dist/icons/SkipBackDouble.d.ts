import type { DefineComponent } from 'vue';

export interface SkipBackDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SkipBackDouble: DefineComponent<SkipBackDoubleProps>;

export default SkipBackDouble;
export { SkipBackDouble };
