import type { DefineComponent } from 'vue';

export interface WindowToggleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowToggle: DefineComponent<WindowToggleProps>;

export default WindowToggle;
export { WindowToggle };
