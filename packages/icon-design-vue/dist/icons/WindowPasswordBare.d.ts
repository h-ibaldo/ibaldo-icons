import type { DefineComponent } from 'vue';

export interface WindowPasswordBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowPasswordBare: DefineComponent<WindowPasswordBareProps>;

export default WindowPasswordBare;
export { WindowPasswordBare };
