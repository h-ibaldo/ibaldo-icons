import { SvelteComponent } from 'svelte';

export interface BoltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bolt extends SvelteComponent<BoltProps> {}
