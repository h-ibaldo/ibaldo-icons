import { SvelteComponent } from 'svelte';

export interface LinkPlusWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPlusWide extends SvelteComponent<LinkPlusWideProps> {}
