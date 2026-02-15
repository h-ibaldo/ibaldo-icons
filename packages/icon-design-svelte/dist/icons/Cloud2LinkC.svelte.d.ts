import { SvelteComponent } from 'svelte';

export interface Cloud2LinkCProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2LinkC extends SvelteComponent<Cloud2LinkCProps> {}
