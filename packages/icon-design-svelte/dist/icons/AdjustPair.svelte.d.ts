import { SvelteComponent } from 'svelte';

export interface AdjustPairProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AdjustPair extends SvelteComponent<AdjustPairProps> {}
