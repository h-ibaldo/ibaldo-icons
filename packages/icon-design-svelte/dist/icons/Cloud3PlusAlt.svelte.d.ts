import { SvelteComponent } from 'svelte';

export interface Cloud3PlusAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3PlusAlt extends SvelteComponent<Cloud3PlusAltProps> {}
