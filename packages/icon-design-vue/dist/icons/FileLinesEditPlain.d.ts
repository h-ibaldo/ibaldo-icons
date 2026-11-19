import type { DefineComponent } from 'vue';

export interface FileLinesEditPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinesEditPlain: DefineComponent<FileLinesEditPlainProps>;

export default FileLinesEditPlain;
export { FileLinesEditPlain };
