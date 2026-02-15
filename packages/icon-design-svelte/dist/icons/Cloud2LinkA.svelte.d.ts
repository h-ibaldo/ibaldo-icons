import { SvelteComponent } from 'svelte';

export interface Cloud2LinkAProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2LinkA extends SvelteComponent<Cloud2LinkAProps> {}
