import type { DefineComponent } from 'vue';

export interface TabDownloadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabDownload: DefineComponent<TabDownloadProps>;

export default TabDownload;
export { TabDownload };
