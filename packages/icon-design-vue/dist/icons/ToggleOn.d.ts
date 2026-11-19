import type { DefineComponent } from 'vue';

export interface ToggleOnProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToggleOn: DefineComponent<ToggleOnProps>;

export default ToggleOn;
export { ToggleOn };
