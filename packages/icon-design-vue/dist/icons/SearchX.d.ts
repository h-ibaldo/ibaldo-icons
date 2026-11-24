import type { DefineComponent } from 'vue';

export interface SearchXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchX: DefineComponent<SearchXProps>;

export default SearchX;
export { SearchX };
