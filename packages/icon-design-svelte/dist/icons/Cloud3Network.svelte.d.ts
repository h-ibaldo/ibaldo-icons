import { SvelteComponent } from 'svelte';

export interface Cloud3NetworkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Network extends SvelteComponent<Cloud3NetworkProps> {}
