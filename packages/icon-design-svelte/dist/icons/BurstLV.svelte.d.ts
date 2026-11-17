import { SvelteComponent } from 'svelte';

export interface BurstLVProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BurstLV extends SvelteComponent<BurstLVProps> {}
