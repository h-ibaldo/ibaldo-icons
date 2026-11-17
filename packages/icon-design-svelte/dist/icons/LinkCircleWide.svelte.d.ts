import { SvelteComponent } from 'svelte';

export interface LinkCircleWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCircleWide extends SvelteComponent<LinkCircleWideProps> {}
