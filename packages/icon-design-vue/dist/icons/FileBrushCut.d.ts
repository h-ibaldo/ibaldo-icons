import type { DefineComponent } from 'vue';

export interface FileBrushCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileBrushCut: DefineComponent<FileBrushCutProps>;

export default FileBrushCut;
export { FileBrushCut };
