import { SvelteComponent } from 'svelte';

export interface LinkCircleXWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCircleXWide extends SvelteComponent<LinkCircleXWideProps> {}
