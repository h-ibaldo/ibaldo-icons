import type { DefineComponent } from 'vue';

export interface FileSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileSearch: DefineComponent<FileSearchProps>;

export default FileSearch;
export { FileSearch };
