import type { DefineComponent } from 'vue';

export interface SortUpWideNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SortUpWideNarrow: DefineComponent<SortUpWideNarrowProps>;

export default SortUpWideNarrow;
export { SortUpWideNarrow };
