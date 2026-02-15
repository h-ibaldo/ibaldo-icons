import { SvelteComponent } from 'svelte';

export interface ClockCloudProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockCloud extends SvelteComponent<ClockCloudProps> {}
