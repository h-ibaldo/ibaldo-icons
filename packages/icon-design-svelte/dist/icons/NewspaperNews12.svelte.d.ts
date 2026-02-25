import { SvelteComponent } from 'svelte';

export interface NewspaperNews12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperNews12 extends SvelteComponent<NewspaperNews12Props> {}
