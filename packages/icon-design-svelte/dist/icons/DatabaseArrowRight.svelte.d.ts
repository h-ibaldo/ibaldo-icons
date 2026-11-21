import { SvelteComponent } from 'svelte';

export interface DatabaseArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DatabaseArrowRight extends SvelteComponent<DatabaseArrowRightProps> {}
