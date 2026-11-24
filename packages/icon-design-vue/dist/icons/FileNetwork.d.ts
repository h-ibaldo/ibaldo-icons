import type { DefineComponent } from 'vue';

export interface FileNetworkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileNetwork: DefineComponent<FileNetworkProps>;

export default FileNetwork;
export { FileNetwork };
