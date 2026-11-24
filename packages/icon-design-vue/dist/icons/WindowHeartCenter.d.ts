import type { DefineComponent } from 'vue';

export interface WindowHeartCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowHeartCenter: DefineComponent<WindowHeartCenterProps>;

export default WindowHeartCenter;
export { WindowHeartCenter };
