import type { DefineComponent } from 'vue';

export interface WindowPlayCenterPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowPlayCenterPlain: DefineComponent<WindowPlayCenterPlainProps>;

export default WindowPlayCenterPlain;
export { WindowPlayCenterPlain };
