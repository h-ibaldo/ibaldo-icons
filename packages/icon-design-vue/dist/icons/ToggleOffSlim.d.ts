import type { DefineComponent } from 'vue';

export interface ToggleOffSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToggleOffSlim: DefineComponent<ToggleOffSlimProps>;

export default ToggleOffSlim;
export { ToggleOffSlim };
