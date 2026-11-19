import type { DefineComponent } from 'vue';

export interface FileSyncPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileSyncPlain: DefineComponent<FileSyncPlainProps>;

export default FileSyncPlain;
export { FileSyncPlain };
