import { SvelteComponent } from 'svelte';

export interface DatabaseArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DatabaseArrowUp extends SvelteComponent<DatabaseArrowUpProps> {}
