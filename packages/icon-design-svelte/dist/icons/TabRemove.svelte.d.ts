import { SvelteComponent } from 'svelte';

export interface TabRemoveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabRemove extends SvelteComponent<TabRemoveProps> {}
