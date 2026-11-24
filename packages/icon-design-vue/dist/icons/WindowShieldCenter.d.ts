import type { DefineComponent } from 'vue';

export interface WindowShieldCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowShieldCenter: DefineComponent<WindowShieldCenterProps>;

export default WindowShieldCenter;
export { WindowShieldCenter };
