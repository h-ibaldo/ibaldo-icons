import { SvelteComponent } from 'svelte';

export interface Cloud1ArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1ArrowUp extends SvelteComponent<Cloud1ArrowUpProps> {}
