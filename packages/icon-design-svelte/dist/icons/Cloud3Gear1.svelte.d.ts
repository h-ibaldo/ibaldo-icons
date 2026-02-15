import { SvelteComponent } from 'svelte';

export interface Cloud3Gear1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Gear1 extends SvelteComponent<Cloud3Gear1Props> {}
