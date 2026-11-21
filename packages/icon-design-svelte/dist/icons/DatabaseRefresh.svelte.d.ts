import { SvelteComponent } from 'svelte';

export interface DatabaseRefreshProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DatabaseRefresh extends SvelteComponent<DatabaseRefreshProps> {}
