import { SvelteComponent } from 'svelte';

export interface ArrowDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDown extends SvelteComponent<ArrowDownProps> {}
