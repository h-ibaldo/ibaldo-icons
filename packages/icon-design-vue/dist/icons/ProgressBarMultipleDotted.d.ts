import type { DefineComponent } from 'vue';

export interface ProgressBarMultipleDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ProgressBarMultipleDotted: DefineComponent<ProgressBarMultipleDottedProps>;

export default ProgressBarMultipleDotted;
export { ProgressBarMultipleDotted };
