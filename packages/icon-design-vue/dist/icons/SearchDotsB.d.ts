import type { DefineComponent } from 'vue';

export interface SearchDotsBProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchDotsB: DefineComponent<SearchDotsBProps>;

export default SearchDotsB;
export { SearchDotsB };
