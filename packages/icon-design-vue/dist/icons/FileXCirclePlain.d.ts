import type { DefineComponent } from 'vue';

export interface FileXCirclePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileXCirclePlain: DefineComponent<FileXCirclePlainProps>;

export default FileXCirclePlain;
export { FileXCirclePlain };
