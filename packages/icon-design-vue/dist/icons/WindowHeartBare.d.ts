import type { DefineComponent } from 'vue';

export interface WindowHeartBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowHeartBare: DefineComponent<WindowHeartBareProps>;

export default WindowHeartBare;
export { WindowHeartBare };
