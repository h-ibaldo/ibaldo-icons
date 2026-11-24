import type { DefineComponent } from 'vue';

export interface ToggleOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToggleOff: DefineComponent<ToggleOffProps>;

export default ToggleOff;
export { ToggleOff };
