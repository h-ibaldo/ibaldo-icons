import { SvelteComponent } from 'svelte';

export interface BellOctagonOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellOctagonOff extends SvelteComponent<BellOctagonOffProps> {}
