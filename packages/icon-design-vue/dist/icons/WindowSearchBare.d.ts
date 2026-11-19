import type { DefineComponent } from 'vue';

export interface WindowSearchBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSearchBare: DefineComponent<WindowSearchBareProps>;

export default WindowSearchBare;
export { WindowSearchBare };
