import type { DefineComponent } from 'vue';

export interface WindowWrenchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowWrench: DefineComponent<WindowWrenchProps>;

export default WindowWrench;
export { WindowWrench };
