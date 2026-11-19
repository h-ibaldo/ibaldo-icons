import type { DefineComponent } from 'vue';

export interface WindowMedalBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowMedalBare: DefineComponent<WindowMedalBareProps>;

export default WindowMedalBare;
export { WindowMedalBare };
