import { SvelteComponent } from 'svelte';

export interface Cloud3UnlockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Unlock extends SvelteComponent<Cloud3UnlockProps> {}
