import type { DefineComponent } from 'vue';

export interface FilePlusCornerWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePlusCornerWide: DefineComponent<FilePlusCornerWideProps>;

export default FilePlusCornerWide;
export { FilePlusCornerWide };
