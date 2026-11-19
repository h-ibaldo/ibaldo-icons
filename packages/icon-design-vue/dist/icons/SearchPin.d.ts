import type { DefineComponent } from 'vue';

export interface SearchPinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SearchPin: DefineComponent<SearchPinProps>;

export default SearchPin;
export { SearchPin };
