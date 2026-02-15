import { SvelteComponent } from 'svelte';

export interface Cloud2AlertSignProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2AlertSign extends SvelteComponent<Cloud2AlertSignProps> {}
