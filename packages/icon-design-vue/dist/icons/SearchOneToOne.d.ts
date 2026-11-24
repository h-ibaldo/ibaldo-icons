import type { DefineComponent } from 'vue';

export interface SearchOneToOneProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchOneToOne: DefineComponent<SearchOneToOneProps>;

export default SearchOneToOne;
export { SearchOneToOne };
