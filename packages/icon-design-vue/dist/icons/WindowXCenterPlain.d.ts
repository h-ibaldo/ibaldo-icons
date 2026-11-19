import type { DefineComponent } from 'vue';

export interface WindowXCenterPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowXCenterPlain: DefineComponent<WindowXCenterPlainProps>;

export default WindowXCenterPlain;
export { WindowXCenterPlain };
