import { SvelteComponent } from 'svelte';

export interface DatabasePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DatabasePlus extends SvelteComponent<DatabasePlusProps> {}
