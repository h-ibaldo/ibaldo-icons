import type { DefineComponent } from 'vue';

export interface SortDownNarrowWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SortDownNarrowWide: DefineComponent<SortDownNarrowWideProps>;

export default SortDownNarrowWide;
export { SortDownNarrowWide };
