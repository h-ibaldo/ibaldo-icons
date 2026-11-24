import type { DefineComponent } from 'vue';

export interface WindowDownloadPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowDownloadPlain: DefineComponent<WindowDownloadPlainProps>;

export default WindowDownloadPlain;
export { WindowDownloadPlain };
