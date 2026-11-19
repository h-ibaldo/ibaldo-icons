import type { DefineComponent } from 'vue';

export interface SearchSyncBProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchSyncB: DefineComponent<SearchSyncBProps>;

export default SearchSyncB;
export { SearchSyncB };
