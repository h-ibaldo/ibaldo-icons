import type { DefineComponent } from 'vue';

export interface SkipBackThickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SkipBackThick: DefineComponent<SkipBackThickProps>;

export default SkipBackThick;
export { SkipBackThick };
