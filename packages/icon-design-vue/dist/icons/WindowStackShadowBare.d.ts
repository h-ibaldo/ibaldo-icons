import type { DefineComponent } from 'vue';

export interface WindowStackShadowBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowStackShadowBare: DefineComponent<WindowStackShadowBareProps>;

export default WindowStackShadowBare;
export { WindowStackShadowBare };
