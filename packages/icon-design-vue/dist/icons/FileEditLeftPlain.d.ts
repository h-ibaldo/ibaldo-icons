import type { DefineComponent } from 'vue';

export interface FileEditLeftPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileEditLeftPlain: DefineComponent<FileEditLeftPlainProps>;

export default FileEditLeftPlain;
export { FileEditLeftPlain };
