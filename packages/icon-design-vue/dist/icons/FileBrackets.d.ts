import type { DefineComponent } from 'vue';

export interface FileBracketsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileBrackets: DefineComponent<FileBracketsProps>;

export default FileBrackets;
export { FileBrackets };
