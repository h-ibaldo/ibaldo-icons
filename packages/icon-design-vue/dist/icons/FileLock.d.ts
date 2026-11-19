import type { DefineComponent } from 'vue';

export interface FileLockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLock: DefineComponent<FileLockProps>;

export default FileLock;
export { FileLock };
