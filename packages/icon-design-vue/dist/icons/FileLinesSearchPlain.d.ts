import type { DefineComponent } from 'vue';

export interface FileLinesSearchPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinesSearchPlain: DefineComponent<FileLinesSearchPlainProps>;

export default FileLinesSearchPlain;
export { FileLinesSearchPlain };
