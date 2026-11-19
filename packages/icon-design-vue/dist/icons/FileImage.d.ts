import type { DefineComponent } from 'vue';

export interface FileImageProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileImage: DefineComponent<FileImageProps>;

export default FileImage;
export { FileImage };
