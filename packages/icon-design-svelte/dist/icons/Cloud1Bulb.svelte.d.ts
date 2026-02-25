import { SvelteComponent } from 'svelte';

export interface Cloud1BulbProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Bulb extends SvelteComponent<Cloud1BulbProps> {}
