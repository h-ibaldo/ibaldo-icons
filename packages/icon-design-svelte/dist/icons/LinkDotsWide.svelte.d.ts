import { SvelteComponent } from 'svelte';

export interface LinkDotsWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkDotsWide extends SvelteComponent<LinkDotsWideProps> {}
