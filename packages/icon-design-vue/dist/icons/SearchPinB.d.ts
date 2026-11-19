import type { DefineComponent } from 'vue';

export interface SearchPinBProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchPinB: DefineComponent<SearchPinBProps>;

export default SearchPinB;
export { SearchPinB };
