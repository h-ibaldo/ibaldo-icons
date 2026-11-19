import type { DefineComponent } from 'vue';

export interface FileEditDetailedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileEditDetailed: DefineComponent<FileEditDetailedProps>;

export default FileEditDetailed;
export { FileEditDetailed };
