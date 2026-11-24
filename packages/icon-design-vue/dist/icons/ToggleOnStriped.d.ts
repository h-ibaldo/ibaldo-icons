import type { DefineComponent } from 'vue';

export interface ToggleOnStripedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToggleOnStriped: DefineComponent<ToggleOnStripedProps>;

export default ToggleOnStriped;
export { ToggleOnStriped };
