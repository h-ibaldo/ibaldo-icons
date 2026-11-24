import type { DefineComponent } from 'vue';

export interface FileNetworkDotsPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileNetworkDotsPlain: DefineComponent<FileNetworkDotsPlainProps>;

export default FileNetworkDotsPlain;
export { FileNetworkDotsPlain };
