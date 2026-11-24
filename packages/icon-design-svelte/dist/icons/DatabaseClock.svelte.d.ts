import { SvelteComponent } from 'svelte';

export interface DatabaseClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DatabaseClock extends SvelteComponent<DatabaseClockProps> {}
