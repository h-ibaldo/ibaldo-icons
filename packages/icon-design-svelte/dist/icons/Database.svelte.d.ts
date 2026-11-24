import { SvelteComponent } from 'svelte';

export interface DatabaseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Database extends SvelteComponent<DatabaseProps> {}
