import type { DefineComponent } from 'vue';

export interface WindowCheckCenterPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowCheckCenterPlain: DefineComponent<WindowCheckCenterPlainProps>;

export default WindowCheckCenterPlain;
export { WindowCheckCenterPlain };
