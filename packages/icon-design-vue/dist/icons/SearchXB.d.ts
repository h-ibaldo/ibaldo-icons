import type { DefineComponent } from 'vue';

export interface SearchXBProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchXB: DefineComponent<SearchXBProps>;

export default SearchXB;
export { SearchXB };
