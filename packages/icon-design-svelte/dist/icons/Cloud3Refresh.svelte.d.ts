import { SvelteComponent } from 'svelte';

export interface Cloud3RefreshProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Refresh extends SvelteComponent<Cloud3RefreshProps> {}
