import type { DefineComponent } from 'vue';

export interface FileStackOverlapPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStackOverlapPlain: DefineComponent<FileStackOverlapPlainProps>;

export default FileStackOverlapPlain;
export { FileStackOverlapPlain };
