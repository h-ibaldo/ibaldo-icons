import type { DefineComponent } from 'vue';

export interface SearchBracketsCProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchBracketsC: DefineComponent<SearchBracketsCProps>;

export default SearchBracketsC;
export { SearchBracketsC };
