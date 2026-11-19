import type { DefineComponent } from 'vue';

export interface FileBanPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileBanPlain: DefineComponent<FileBanPlainProps>;

export default FileBanPlain;
export { FileBanPlain };
