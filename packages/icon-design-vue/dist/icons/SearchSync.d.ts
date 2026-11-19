import type { DefineComponent } from 'vue';

export interface SearchSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchSync: DefineComponent<SearchSyncProps>;

export default SearchSync;
export { SearchSync };
