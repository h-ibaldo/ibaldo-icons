import { SvelteComponent } from 'svelte';

export interface TabSettings2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabSettings2 extends SvelteComponent<TabSettings2Props> {}
