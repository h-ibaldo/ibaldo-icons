import { SvelteComponent } from 'svelte';

export interface LinkArrowUpWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkArrowUpWide extends SvelteComponent<LinkArrowUpWideProps> {}
