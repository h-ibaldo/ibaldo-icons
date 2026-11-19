import type { DefineComponent } from 'vue';

export interface FileJoinedDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileJoinedDots: DefineComponent<FileJoinedDotsProps>;

export default FileJoinedDots;
export { FileJoinedDots };
