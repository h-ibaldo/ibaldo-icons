import type { DefineComponent } from 'vue';

export interface FileWinkPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileWinkPlain: DefineComponent<FileWinkPlainProps>;

export default FileWinkPlain;
export { FileWinkPlain };
