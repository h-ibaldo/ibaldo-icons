import type { DefineComponent } from 'vue';

export interface SearchRefreshProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchRefresh: DefineComponent<SearchRefreshProps>;

export default SearchRefresh;
export { SearchRefresh };
