import { SvelteComponent } from 'svelte';

export interface NewspaperNews3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperNews3 extends SvelteComponent<NewspaperNews3Props> {}
