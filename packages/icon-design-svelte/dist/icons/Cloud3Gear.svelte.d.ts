import { SvelteComponent } from 'svelte';

export interface Cloud3GearProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Gear extends SvelteComponent<Cloud3GearProps> {}
