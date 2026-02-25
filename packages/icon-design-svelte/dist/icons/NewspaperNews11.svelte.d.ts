import { SvelteComponent } from 'svelte';

export interface NewspaperNews11Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperNews11 extends SvelteComponent<NewspaperNews11Props> {}
