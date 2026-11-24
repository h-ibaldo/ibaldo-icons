import type { DefineComponent } from 'vue';

export interface ProgressDotsCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ProgressDotsCenter: DefineComponent<ProgressDotsCenterProps>;

export default ProgressDotsCenter;
export { ProgressDotsCenter };
