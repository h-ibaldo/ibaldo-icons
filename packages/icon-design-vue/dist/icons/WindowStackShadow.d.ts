import type { DefineComponent } from 'vue';

export interface WindowStackShadowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowStackShadow: DefineComponent<WindowStackShadowProps>;

export default WindowStackShadow;
export { WindowStackShadow };
