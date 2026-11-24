import type { DefineComponent } from 'vue';

export interface WindowBoltCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowBoltCenter: DefineComponent<WindowBoltCenterProps>;

export default WindowBoltCenter;
export { WindowBoltCenter };
