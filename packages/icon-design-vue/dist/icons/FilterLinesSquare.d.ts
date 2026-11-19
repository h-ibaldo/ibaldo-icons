import type { DefineComponent } from 'vue';

export interface FilterLinesSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilterLinesSquare: DefineComponent<FilterLinesSquareProps>;

export default FilterLinesSquare;
export { FilterLinesSquare };
