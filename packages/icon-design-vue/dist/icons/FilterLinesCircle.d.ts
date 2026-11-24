import type { DefineComponent } from 'vue';

export interface FilterLinesCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilterLinesCircle: DefineComponent<FilterLinesCircleProps>;

export default FilterLinesCircle;
export { FilterLinesCircle };
