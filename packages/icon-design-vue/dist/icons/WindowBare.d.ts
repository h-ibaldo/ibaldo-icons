import type { DefineComponent } from 'vue';

export interface WindowBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowBare: DefineComponent<WindowBareProps>;

export default WindowBare;
export { WindowBare };
