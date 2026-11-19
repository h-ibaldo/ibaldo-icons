import type { DefineComponent } from 'vue';

export interface SearchDownloadProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchDownload: DefineComponent<SearchDownloadProps>;

export default SearchDownload;
export { SearchDownload };
