import type { DefineComponent } from 'vue';

export interface FileGridProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileGrid: DefineComponent<FileGridProps>;

export default FileGrid;
export { FileGrid };
