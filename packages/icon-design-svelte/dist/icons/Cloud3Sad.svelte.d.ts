import { SvelteComponent } from 'svelte';

export interface Cloud3SadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Sad extends SvelteComponent<Cloud3SadProps> {}
