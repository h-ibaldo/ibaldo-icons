import { SvelteComponent } from 'svelte';

export interface Cloud2CloseAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2CloseAlt extends SvelteComponent<Cloud2CloseAltProps> {}
