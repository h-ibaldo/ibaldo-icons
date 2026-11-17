import { SvelteComponent } from 'svelte';

export interface TabCheck2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCheck2 extends SvelteComponent<TabCheck2Props> {}
