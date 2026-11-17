import { SvelteComponent } from 'svelte';

export interface TabAdd2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabAdd2 extends SvelteComponent<TabAdd2Props> {}
