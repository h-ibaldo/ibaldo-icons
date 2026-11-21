import { SvelteComponent } from 'svelte';

export interface FoxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Fox extends SvelteComponent<FoxProps> {}
