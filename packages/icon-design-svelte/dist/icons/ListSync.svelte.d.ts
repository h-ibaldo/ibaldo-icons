import { SvelteComponent } from 'svelte';

export interface ListSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListSync extends SvelteComponent<ListSyncProps> {}
