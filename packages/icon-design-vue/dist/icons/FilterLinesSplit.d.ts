import type { DefineComponent } from 'vue';

export interface FilterLinesSplitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FilterLinesSplit: DefineComponent<FilterLinesSplitProps>;

export default FilterLinesSplit;
export { FilterLinesSplit };
