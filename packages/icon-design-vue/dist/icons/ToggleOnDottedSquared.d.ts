import type { DefineComponent } from 'vue';

export interface ToggleOnDottedSquaredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToggleOnDottedSquared: DefineComponent<ToggleOnDottedSquaredProps>;

export default ToggleOnDottedSquared;
export { ToggleOnDottedSquared };
