import { SvelteComponent } from 'svelte';

export interface Cloud2ArrowUpDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2ArrowUpDown extends SvelteComponent<Cloud2ArrowUpDownProps> {}
