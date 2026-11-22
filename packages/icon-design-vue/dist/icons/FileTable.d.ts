import type { DefineComponent } from 'vue';

export interface FileTableProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileTable: DefineComponent<FileTableProps>;

export default FileTable;
export { FileTable };
