import type { DefineComponent } from 'vue';

export interface ProgressDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ProgressDots: DefineComponent<ProgressDotsProps>;

export default ProgressDots;
export { ProgressDots };
