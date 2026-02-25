import { SvelteComponent } from 'svelte';

export interface Cloud2LockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Lock extends SvelteComponent<Cloud2LockProps> {}
