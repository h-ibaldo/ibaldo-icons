import type { DefineComponent } from 'vue';

export interface ToggleOnSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToggleOnSlim: DefineComponent<ToggleOnSlimProps>;

export default ToggleOnSlim;
export { ToggleOnSlim };
