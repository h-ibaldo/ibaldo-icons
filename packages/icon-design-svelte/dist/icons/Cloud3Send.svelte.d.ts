import { SvelteComponent } from 'svelte';

export interface Cloud3SendProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Send extends SvelteComponent<Cloud3SendProps> {}
