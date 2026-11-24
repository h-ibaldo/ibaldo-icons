import { SvelteComponent } from 'svelte';

export interface ClockDashedHalfSparseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockDashedHalfSparse extends SvelteComponent<ClockDashedHalfSparseProps> {}
