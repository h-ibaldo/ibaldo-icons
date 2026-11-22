import type { DefineComponent } from 'vue';

export interface FilterLinesPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilterLinesPlus: DefineComponent<FilterLinesPlusProps>;

export default FilterLinesPlus;
export { FilterLinesPlus };
