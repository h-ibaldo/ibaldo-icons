import { SvelteComponent } from 'svelte';

export interface Cloud2AlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Alert extends SvelteComponent<Cloud2AlertProps> {}
