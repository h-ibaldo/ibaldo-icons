import { SvelteComponent } from 'svelte';

export interface NewspaperNews8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperNews8 extends SvelteComponent<NewspaperNews8Props> {}
