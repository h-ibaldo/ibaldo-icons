import { SvelteComponent } from 'svelte';

export interface CheckCircleDashedHalfSparseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckCircleDashedHalfSparse extends SvelteComponent<CheckCircleDashedHalfSparseProps> {}
