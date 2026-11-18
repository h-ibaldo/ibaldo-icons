import { SvelteComponent } from 'svelte';

export interface LinkBrokenDoubleWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenDoubleWide extends SvelteComponent<LinkBrokenDoubleWideProps> {}
