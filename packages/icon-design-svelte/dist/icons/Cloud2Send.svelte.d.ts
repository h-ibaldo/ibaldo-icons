import { SvelteComponent } from 'svelte';

export interface Cloud2SendProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2Send extends SvelteComponent<Cloud2SendProps> {}
