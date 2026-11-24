import type { DefineComponent } from 'vue';

export interface FileVideoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileVideo: DefineComponent<FileVideoProps>;

export default FileVideo;
export { FileVideo };
