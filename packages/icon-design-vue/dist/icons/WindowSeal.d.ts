import type { DefineComponent } from 'vue';

export interface WindowSealProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSeal: DefineComponent<WindowSealProps>;

export default WindowSeal;
export { WindowSeal };
