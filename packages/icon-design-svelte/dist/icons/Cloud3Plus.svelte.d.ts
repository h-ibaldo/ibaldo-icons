import { SvelteComponent } from 'svelte';

export interface Cloud3PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Plus extends SvelteComponent<Cloud3PlusProps> {}
