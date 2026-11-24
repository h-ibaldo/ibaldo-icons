import type { DefineComponent } from 'vue';

export interface FileStarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStar: DefineComponent<FileStarProps>;

export default FileStar;
export { FileStar };
