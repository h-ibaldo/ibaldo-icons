import { SvelteComponent } from 'svelte';

export interface LinkMenuWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMenuWide extends SvelteComponent<LinkMenuWideProps> {}
