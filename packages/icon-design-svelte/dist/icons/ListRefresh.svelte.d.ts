import { SvelteComponent } from 'svelte';

export interface ListRefreshProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListRefresh extends SvelteComponent<ListRefreshProps> {}
