import type { DefineComponent } from 'vue';

export interface FileLockPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLockPlain: DefineComponent<FileLockPlainProps>;

export default FileLockPlain;
export { FileLockPlain };
