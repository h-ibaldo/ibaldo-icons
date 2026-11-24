import type { DefineComponent } from 'vue';

export interface FileBrushProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileBrush: DefineComponent<FileBrushProps>;

export default FileBrush;
export { FileBrush };
