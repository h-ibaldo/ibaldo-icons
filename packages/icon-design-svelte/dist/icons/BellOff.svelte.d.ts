import { SvelteComponent } from 'svelte';

export interface BellOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellOff extends SvelteComponent<BellOffProps> {}
