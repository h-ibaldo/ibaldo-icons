import { SvelteComponent } from 'svelte';

export interface LinkXWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkXWide extends SvelteComponent<LinkXWideProps> {}
