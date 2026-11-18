import { SvelteComponent } from 'svelte';

export interface LinkMinusWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMinusWide extends SvelteComponent<LinkMinusWideProps> {}
