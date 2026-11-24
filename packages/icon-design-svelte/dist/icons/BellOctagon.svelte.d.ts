import { SvelteComponent } from 'svelte';

export interface BellOctagonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellOctagon extends SvelteComponent<BellOctagonProps> {}
