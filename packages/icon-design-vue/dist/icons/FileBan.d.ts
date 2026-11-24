import type { DefineComponent } from 'vue';

export interface FileBanProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileBan: DefineComponent<FileBanProps>;

export default FileBan;
export { FileBan };
