import type { DefineComponent } from 'vue';

export interface SortDownWideNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SortDownWideNarrow: DefineComponent<SortDownWideNarrowProps>;

export default SortDownWideNarrow;
export { SortDownWideNarrow };
