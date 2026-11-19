import type { DefineComponent } from 'vue';

export interface WindowHeartCenterBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowHeartCenterBare: DefineComponent<WindowHeartCenterBareProps>;

export default WindowHeartCenterBare;
export { WindowHeartCenterBare };
