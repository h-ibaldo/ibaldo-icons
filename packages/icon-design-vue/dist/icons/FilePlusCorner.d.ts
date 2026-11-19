import type { DefineComponent } from 'vue';

export interface FilePlusCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePlusCorner: DefineComponent<FilePlusCornerProps>;

export default FilePlusCorner;
export { FilePlusCorner };
