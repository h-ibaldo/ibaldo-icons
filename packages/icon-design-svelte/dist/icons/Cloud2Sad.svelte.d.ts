import { SvelteComponent } from 'svelte';

export interface Cloud2SadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Sad extends SvelteComponent<Cloud2SadProps> {}
