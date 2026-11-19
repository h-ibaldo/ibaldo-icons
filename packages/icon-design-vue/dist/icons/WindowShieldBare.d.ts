import type { DefineComponent } from 'vue';

export interface WindowShieldBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowShieldBare: DefineComponent<WindowShieldBareProps>;

export default WindowShieldBare;
export { WindowShieldBare };
