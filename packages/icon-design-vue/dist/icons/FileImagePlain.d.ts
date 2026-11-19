import type { DefineComponent } from 'vue';

export interface FileImagePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileImagePlain: DefineComponent<FileImagePlainProps>;

export default FileImagePlain;
export { FileImagePlain };
