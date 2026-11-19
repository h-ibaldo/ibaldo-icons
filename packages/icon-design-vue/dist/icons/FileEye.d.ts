import type { DefineComponent } from 'vue';

export interface FileEyeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileEye: DefineComponent<FileEyeProps>;

export default FileEye;
export { FileEye };
