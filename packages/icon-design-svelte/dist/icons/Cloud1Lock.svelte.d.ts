import { SvelteComponent } from 'svelte';

export interface Cloud1LockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Lock extends SvelteComponent<Cloud1LockProps> {}
