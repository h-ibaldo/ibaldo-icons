import { SvelteComponent } from 'svelte';

export interface LinkSquareWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkSquareWide extends SvelteComponent<LinkSquareWideProps> {}
