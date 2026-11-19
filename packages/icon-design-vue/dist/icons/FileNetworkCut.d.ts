import type { DefineComponent } from 'vue';

export interface FileNetworkCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileNetworkCut: DefineComponent<FileNetworkCutProps>;

export default FileNetworkCut;
export { FileNetworkCut };
