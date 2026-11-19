import type { DefineComponent } from 'vue';

export interface FileLinesEditProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinesEdit: DefineComponent<FileLinesEditProps>;

export default FileLinesEdit;
export { FileLinesEdit };
