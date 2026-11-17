import { SvelteComponent } from 'svelte';

export interface Cloud3SlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Slash extends SvelteComponent<Cloud3SlashProps> {}
