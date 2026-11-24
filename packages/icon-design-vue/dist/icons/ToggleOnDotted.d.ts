import type { DefineComponent } from 'vue';

export interface ToggleOnDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToggleOnDotted: DefineComponent<ToggleOnDottedProps>;

export default ToggleOnDotted;
export { ToggleOnDotted };
