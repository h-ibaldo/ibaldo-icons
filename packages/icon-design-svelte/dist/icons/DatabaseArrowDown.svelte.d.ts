import { SvelteComponent } from 'svelte';

export interface DatabaseArrowDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DatabaseArrowDown extends SvelteComponent<DatabaseArrowDownProps> {}
