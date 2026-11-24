import type { DefineComponent } from 'vue';

export interface FileNetworkDotsCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileNetworkDotsCut: DefineComponent<FileNetworkDotsCutProps>;

export default FileNetworkDotsCut;
export { FileNetworkDotsCut };
