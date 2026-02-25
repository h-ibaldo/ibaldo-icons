import { SvelteComponent } from 'svelte';

export interface NewspaperNews7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperNews7 extends SvelteComponent<NewspaperNews7Props> {}
