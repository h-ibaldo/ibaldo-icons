import { SvelteComponent } from 'svelte';

export interface Cloud3ArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3ArrowRight extends SvelteComponent<Cloud3ArrowRightProps> {}
