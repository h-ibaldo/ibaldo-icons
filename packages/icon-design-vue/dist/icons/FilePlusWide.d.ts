import type { DefineComponent } from 'vue';

export interface FilePlusWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilePlusWide: DefineComponent<FilePlusWideProps>;

export default FilePlusWide;
export { FilePlusWide };
