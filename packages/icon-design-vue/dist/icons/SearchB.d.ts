import type { DefineComponent } from 'vue';

export interface SearchBProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchB: DefineComponent<SearchBProps>;

export default SearchB;
export { SearchB };
