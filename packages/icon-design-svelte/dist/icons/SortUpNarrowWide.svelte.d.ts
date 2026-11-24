import { SvelteComponent } from 'svelte';

export interface SortUpNarrowWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SortUpNarrowWide extends SvelteComponent<SortUpNarrowWideProps> {}
