import type { DefineComponent } from 'vue';

export interface ToggleMultipleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToggleMultiple: DefineComponent<ToggleMultipleProps>;

export default ToggleMultiple;
export { ToggleMultiple };
