import { SvelteComponent } from 'svelte';

export interface TabSave2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabSave2 extends SvelteComponent<TabSave2Props> {}
