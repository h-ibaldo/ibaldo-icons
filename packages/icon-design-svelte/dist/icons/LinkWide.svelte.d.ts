import { SvelteComponent } from 'svelte';

export interface LinkWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkWide extends SvelteComponent<LinkWideProps> {}
