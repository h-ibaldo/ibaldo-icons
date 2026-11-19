import type { DefineComponent } from 'vue';

export interface FilePlusCornerCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePlusCornerCut: DefineComponent<FilePlusCornerCutProps>;

export default FilePlusCornerCut;
export { FilePlusCornerCut };
