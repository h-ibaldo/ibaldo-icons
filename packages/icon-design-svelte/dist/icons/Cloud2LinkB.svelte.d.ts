import { SvelteComponent } from 'svelte';

export interface Cloud2LinkBProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2LinkB extends SvelteComponent<Cloud2LinkBProps> {}
