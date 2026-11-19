import type { DefineComponent } from 'vue';

export interface ToggleMiddleSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToggleMiddleSlim: DefineComponent<ToggleMiddleSlimProps>;

export default ToggleMiddleSlim;
export { ToggleMiddleSlim };
