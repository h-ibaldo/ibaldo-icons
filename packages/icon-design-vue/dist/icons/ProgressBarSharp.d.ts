import type { DefineComponent } from 'vue';

export interface ProgressBarSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ProgressBarSharp: DefineComponent<ProgressBarSharpProps>;

export default ProgressBarSharp;
export { ProgressBarSharp };
