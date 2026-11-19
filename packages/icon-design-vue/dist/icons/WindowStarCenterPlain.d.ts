import type { DefineComponent } from 'vue';

export interface WindowStarCenterPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowStarCenterPlain: DefineComponent<WindowStarCenterPlainProps>;

export default WindowStarCenterPlain;
export { WindowStarCenterPlain };
