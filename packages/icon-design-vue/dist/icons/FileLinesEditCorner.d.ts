import type { DefineComponent } from 'vue';

export interface FileLinesEditCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinesEditCorner: DefineComponent<FileLinesEditCornerProps>;

export default FileLinesEditCorner;
export { FileLinesEditCorner };
