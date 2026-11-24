import type { DefineComponent } from 'vue';

export interface FileLinkBracketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileLinkBracket: DefineComponent<FileLinkBracketProps>;

export default FileLinkBracket;
export { FileLinkBracket };
