import { SvelteComponent } from 'svelte';

export interface DatabaseCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DatabaseCheck extends SvelteComponent<DatabaseCheckProps> {}
