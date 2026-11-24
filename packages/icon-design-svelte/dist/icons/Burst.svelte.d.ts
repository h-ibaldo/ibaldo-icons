import { SvelteComponent } from 'svelte';

export interface BurstProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Burst extends SvelteComponent<BurstProps> {}
