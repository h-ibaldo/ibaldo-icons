import { SvelteComponent } from 'svelte';

export interface Cloud2BulbProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Bulb extends SvelteComponent<Cloud2BulbProps> {}
