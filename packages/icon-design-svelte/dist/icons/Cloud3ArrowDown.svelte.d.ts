import { SvelteComponent } from 'svelte';

export interface Cloud3ArrowDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3ArrowDown extends SvelteComponent<Cloud3ArrowDownProps> {}
