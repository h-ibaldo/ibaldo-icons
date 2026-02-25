import { SvelteComponent } from 'svelte';

export interface NewspaperNews1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NewspaperNews1 extends SvelteComponent<NewspaperNews1Props> {}
