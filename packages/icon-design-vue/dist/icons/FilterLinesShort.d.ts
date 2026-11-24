import type { DefineComponent } from 'vue';

export interface FilterLinesShortProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilterLinesShort: DefineComponent<FilterLinesShortProps>;

export default FilterLinesShort;
export { FilterLinesShort };
