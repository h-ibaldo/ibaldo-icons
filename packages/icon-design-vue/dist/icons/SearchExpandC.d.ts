import type { DefineComponent } from 'vue';

export interface SearchExpandCProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchExpandC: DefineComponent<SearchExpandCProps>;

export default SearchExpandC;
export { SearchExpandC };
