import type { DefineComponent } from 'vue';

export interface ToggleMultipleSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToggleMultipleSlim: DefineComponent<ToggleMultipleSlimProps>;

export default ToggleMultipleSlim;
export { ToggleMultipleSlim };
