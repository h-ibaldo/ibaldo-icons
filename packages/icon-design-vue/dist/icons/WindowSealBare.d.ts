import type { DefineComponent } from 'vue';

export interface WindowSealBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSealBare: DefineComponent<WindowSealBareProps>;

export default WindowSealBare;
export { WindowSealBare };
