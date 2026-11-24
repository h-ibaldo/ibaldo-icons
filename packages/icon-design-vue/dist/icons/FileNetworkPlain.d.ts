import type { DefineComponent } from 'vue';

export interface FileNetworkPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileNetworkPlain: DefineComponent<FileNetworkPlainProps>;

export default FileNetworkPlain;
export { FileNetworkPlain };
