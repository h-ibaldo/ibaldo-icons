import type { DefineComponent } from 'vue';

export interface FileRefreshProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileRefresh: DefineComponent<FileRefreshProps>;

export default FileRefresh;
export { FileRefresh };
