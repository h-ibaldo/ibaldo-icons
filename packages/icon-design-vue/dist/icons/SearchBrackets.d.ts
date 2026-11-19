import type { DefineComponent } from 'vue';

export interface SearchBracketsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchBrackets: DefineComponent<SearchBracketsProps>;

export default SearchBrackets;
export { SearchBrackets };
