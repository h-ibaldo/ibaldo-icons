import { SvelteComponent } from 'svelte';

export interface FilterLinesWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilterLinesWide extends SvelteComponent<FilterLinesWideProps> {}
