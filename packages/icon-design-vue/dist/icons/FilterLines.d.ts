import type { DefineComponent } from 'vue';

export interface FilterLinesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilterLines: DefineComponent<FilterLinesProps>;

export default FilterLines;
export { FilterLines };
