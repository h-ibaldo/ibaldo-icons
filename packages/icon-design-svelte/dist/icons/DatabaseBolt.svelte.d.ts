import { SvelteComponent } from 'svelte';

export interface DatabaseBoltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DatabaseBolt extends SvelteComponent<DatabaseBoltProps> {}
