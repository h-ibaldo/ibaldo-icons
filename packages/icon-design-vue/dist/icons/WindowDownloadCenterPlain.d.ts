import type { DefineComponent } from 'vue';

export interface WindowDownloadCenterPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowDownloadCenterPlain: DefineComponent<WindowDownloadCenterPlainProps>;

export default WindowDownloadCenterPlain;
export { WindowDownloadCenterPlain };
