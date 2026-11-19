import type { DefineComponent } from 'vue';

export interface ToggleOffSquaredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToggleOffSquared: DefineComponent<ToggleOffSquaredProps>;

export default ToggleOffSquared;
export { ToggleOffSquared };
