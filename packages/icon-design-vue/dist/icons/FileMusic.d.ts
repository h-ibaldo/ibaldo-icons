import type { DefineComponent } from 'vue';

export interface FileMusicProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileMusic: DefineComponent<FileMusicProps>;

export default FileMusic;
export { FileMusic };
