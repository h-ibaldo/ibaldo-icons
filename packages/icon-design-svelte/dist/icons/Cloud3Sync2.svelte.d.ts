import { SvelteComponent } from 'svelte';

export interface Cloud3Sync2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Sync2 extends SvelteComponent<Cloud3Sync2Props> {}
