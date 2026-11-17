import { SvelteComponent } from 'svelte';

export interface Cloud3ViewProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3View extends SvelteComponent<Cloud3ViewProps> {}
