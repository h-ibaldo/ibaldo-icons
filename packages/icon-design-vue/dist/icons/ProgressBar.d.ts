import type { DefineComponent } from 'vue';

export interface ProgressBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ProgressBar: DefineComponent<ProgressBarProps>;

export default ProgressBar;
export { ProgressBar };
