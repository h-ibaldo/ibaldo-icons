import type { DefineComponent } from 'vue';

export interface FolderOpenDownloadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderOpenDownload: DefineComponent<FolderOpenDownloadProps>;

export default FolderOpenDownload;
export { FolderOpenDownload };
