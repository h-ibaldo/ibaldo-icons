import type { DefineComponent } from 'vue';

export interface FileCastCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileCastCorner: DefineComponent<FileCastCornerProps>;

export default FileCastCorner;
export { FileCastCorner };
