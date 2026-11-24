import { SvelteComponent } from 'svelte';

export interface ArrowDownLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownLeft extends SvelteComponent<ArrowDownLeftProps> {}
