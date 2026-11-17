import { SvelteComponent } from 'svelte';

export interface Cloud3SyncAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3SyncAlt extends SvelteComponent<Cloud3SyncAltProps> {}
