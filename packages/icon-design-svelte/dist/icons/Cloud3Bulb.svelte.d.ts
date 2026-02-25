import { SvelteComponent } from 'svelte';

export interface Cloud3BulbProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Bulb extends SvelteComponent<Cloud3BulbProps> {}
