import type { DefineComponent } from 'vue';

export interface FileLinesLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinesLeft: DefineComponent<FileLinesLeftProps>;

export default FileLinesLeft;
export { FileLinesLeft };
