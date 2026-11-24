import type { DefineComponent } from 'vue';

export interface ProgressBarDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ProgressBarDotted: DefineComponent<ProgressBarDottedProps>;

export default ProgressBarDotted;
export { ProgressBarDotted };
