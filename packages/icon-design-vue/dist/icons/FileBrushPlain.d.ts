import type { DefineComponent } from 'vue';

export interface FileBrushPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileBrushPlain: DefineComponent<FileBrushPlainProps>;

export default FileBrushPlain;
export { FileBrushPlain };
