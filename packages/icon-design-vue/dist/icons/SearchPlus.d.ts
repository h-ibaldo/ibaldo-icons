import type { DefineComponent } from 'vue';

export interface SearchPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchPlus: DefineComponent<SearchPlusProps>;

export default SearchPlus;
export { SearchPlus };
