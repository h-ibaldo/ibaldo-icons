import type { DefineComponent } from 'vue';

export interface FileNetworkDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileNetworkDots: DefineComponent<FileNetworkDotsProps>;

export default FileNetworkDots;
export { FileNetworkDots };
