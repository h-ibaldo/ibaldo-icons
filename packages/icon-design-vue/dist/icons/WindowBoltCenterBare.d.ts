import type { DefineComponent } from 'vue';

export interface WindowBoltCenterBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowBoltCenterBare: DefineComponent<WindowBoltCenterBareProps>;

export default WindowBoltCenterBare;
export { WindowBoltCenterBare };
