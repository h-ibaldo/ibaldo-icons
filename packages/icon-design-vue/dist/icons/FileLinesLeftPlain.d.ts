import type { DefineComponent } from 'vue';

export interface FileLinesLeftPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinesLeftPlain: DefineComponent<FileLinesLeftPlainProps>;

export default FileLinesLeftPlain;
export { FileLinesLeftPlain };
