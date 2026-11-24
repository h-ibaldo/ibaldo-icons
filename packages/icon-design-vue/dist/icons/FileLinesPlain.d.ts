import type { DefineComponent } from 'vue';

export interface FileLinesPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinesPlain: DefineComponent<FileLinesPlainProps>;

export default FileLinesPlain;
export { FileLinesPlain };
