import { SvelteComponent } from 'svelte';

export interface Cloud2HappyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Happy extends SvelteComponent<Cloud2HappyProps> {}
