import type { DefineComponent } from 'vue';

export interface WindowWrenchBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowWrenchBare: DefineComponent<WindowWrenchBareProps>;

export default WindowWrenchBare;
export { WindowWrenchBare };
