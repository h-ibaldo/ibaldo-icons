import { SvelteComponent } from 'svelte';

export interface NewspaperNews9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperNews9 extends SvelteComponent<NewspaperNews9Props> {}
