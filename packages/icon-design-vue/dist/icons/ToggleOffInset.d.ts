import type { DefineComponent } from 'vue';

export interface ToggleOffInsetProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToggleOffInset: DefineComponent<ToggleOffInsetProps>;

export default ToggleOffInset;
export { ToggleOffInset };
