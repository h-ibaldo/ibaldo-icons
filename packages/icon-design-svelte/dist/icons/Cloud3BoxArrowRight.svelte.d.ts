import { SvelteComponent } from 'svelte';

export interface Cloud3BoxArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3BoxArrowRight extends SvelteComponent<Cloud3BoxArrowRightProps> {}
