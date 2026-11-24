import type { DefineComponent } from 'vue';

export interface WindowKeyDotBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowKeyDotBare: DefineComponent<WindowKeyDotBareProps>;

export default WindowKeyDotBare;
export { WindowKeyDotBare };
