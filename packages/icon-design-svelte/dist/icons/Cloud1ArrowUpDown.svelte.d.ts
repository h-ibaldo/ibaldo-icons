import { SvelteComponent } from 'svelte';

export interface Cloud1ArrowUpDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1ArrowUpDown extends SvelteComponent<Cloud1ArrowUpDownProps> {}
