import { SvelteComponent } from 'svelte';

export interface NewspaperNews4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperNews4 extends SvelteComponent<NewspaperNews4Props> {}
