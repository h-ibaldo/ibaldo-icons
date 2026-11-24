import type { DefineComponent } from 'vue';

export interface ToggleOnSquaredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToggleOnSquared: DefineComponent<ToggleOnSquaredProps>;

export default ToggleOnSquared;
export { ToggleOnSquared };
