import { SvelteComponent } from 'svelte';

export interface DatabaseSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DatabaseSearch extends SvelteComponent<DatabaseSearchProps> {}
