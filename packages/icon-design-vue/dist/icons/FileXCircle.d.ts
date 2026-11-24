import type { DefineComponent } from 'vue';

export interface FileXCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileXCircle: DefineComponent<FileXCircleProps>;

export default FileXCircle;
export { FileXCircle };
