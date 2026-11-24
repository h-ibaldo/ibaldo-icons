import type { DefineComponent } from 'vue';

export interface TextSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextSearch: DefineComponent<TextSearchProps>;

export default TextSearch;
export { TextSearch };
