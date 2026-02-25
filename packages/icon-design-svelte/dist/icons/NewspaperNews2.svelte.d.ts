import { SvelteComponent } from 'svelte';

export interface NewspaperNews2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperNews2 extends SvelteComponent<NewspaperNews2Props> {}
