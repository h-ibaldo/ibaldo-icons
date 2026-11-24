import type { DefineComponent } from 'vue';

export interface FileUserDoublePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileUserDoublePlain: DefineComponent<FileUserDoublePlainProps>;

export default FileUserDoublePlain;
export { FileUserDoublePlain };
