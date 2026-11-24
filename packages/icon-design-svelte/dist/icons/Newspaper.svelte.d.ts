import { SvelteComponent } from 'svelte';

export interface NewspaperProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Newspaper extends SvelteComponent<NewspaperProps> {}
