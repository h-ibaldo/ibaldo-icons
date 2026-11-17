import { SvelteComponent } from 'svelte';

export interface BoltOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoltOff extends SvelteComponent<BoltOffProps> {}
