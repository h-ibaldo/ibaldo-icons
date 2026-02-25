import { SvelteComponent } from 'svelte';

export interface NewspaperNewsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperNews extends SvelteComponent<NewspaperNewsProps> {}
