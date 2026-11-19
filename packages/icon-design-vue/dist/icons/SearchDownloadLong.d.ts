import type { DefineComponent } from 'vue';

export interface SearchDownloadLongProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchDownloadLong: DefineComponent<SearchDownloadLongProps>;

export default SearchDownloadLong;
export { SearchDownloadLong };
