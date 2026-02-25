import { SvelteComponent } from 'svelte';

export interface Cloud3ArrowUpDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3ArrowUpDown extends SvelteComponent<Cloud3ArrowUpDownProps> {}
