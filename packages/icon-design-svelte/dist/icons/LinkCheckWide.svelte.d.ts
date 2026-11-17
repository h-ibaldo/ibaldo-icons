import { SvelteComponent } from 'svelte';

export interface LinkCheckWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCheckWide extends SvelteComponent<LinkCheckWideProps> {}
