import type { DefineComponent } from 'vue';

export interface SearchShineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchShine: DefineComponent<SearchShineProps>;

export default SearchShine;
export { SearchShine };
