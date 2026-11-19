import type { DefineComponent } from 'vue';

export interface FileEditDetailedPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileEditDetailedPlain: DefineComponent<FileEditDetailedPlainProps>;

export default FileEditDetailedPlain;
export { FileEditDetailedPlain };
