import type { DefineComponent } from 'vue';

export interface FilterLinesWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilterLinesWide: DefineComponent<FilterLinesWideProps>;

export default FilterLinesWide;
export { FilterLinesWide };
