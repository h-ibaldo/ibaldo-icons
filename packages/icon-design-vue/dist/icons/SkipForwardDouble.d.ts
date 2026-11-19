import type { DefineComponent } from 'vue';

export interface SkipForwardDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SkipForwardDouble: DefineComponent<SkipForwardDoubleProps>;

export default SkipForwardDouble;
export { SkipForwardDouble };
