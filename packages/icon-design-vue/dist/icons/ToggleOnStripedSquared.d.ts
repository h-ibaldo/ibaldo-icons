import type { DefineComponent } from 'vue';

export interface ToggleOnStripedSquaredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToggleOnStripedSquared: DefineComponent<ToggleOnStripedSquaredProps>;

export default ToggleOnStripedSquared;
export { ToggleOnStripedSquared };
