import { SvelteComponent } from 'svelte';

export interface NewspaperNews5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperNews5 extends SvelteComponent<NewspaperNews5Props> {}
