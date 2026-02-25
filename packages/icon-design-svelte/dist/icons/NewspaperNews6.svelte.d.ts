import { SvelteComponent } from 'svelte';

export interface NewspaperNews6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperNews6 extends SvelteComponent<NewspaperNews6Props> {}
