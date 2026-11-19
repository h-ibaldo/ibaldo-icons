import type { DefineComponent } from 'vue';

export interface SearchExpandBProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchExpandB: DefineComponent<SearchExpandBProps>;

export default SearchExpandB;
export { SearchExpandB };
