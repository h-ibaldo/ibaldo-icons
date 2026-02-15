import { SvelteComponent } from 'svelte';

export interface Cloud3LockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Lock extends SvelteComponent<Cloud3LockProps> {}
