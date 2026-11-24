import type { DefineComponent } from 'vue';

export interface ToggleOnInsetProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToggleOnInset: DefineComponent<ToggleOnInsetProps>;

export default ToggleOnInset;
export { ToggleOnInset };
