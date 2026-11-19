import type { DefineComponent } from 'vue';

export interface WindowModalBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowModalBare: DefineComponent<WindowModalBareProps>;

export default WindowModalBare;
export { WindowModalBare };
