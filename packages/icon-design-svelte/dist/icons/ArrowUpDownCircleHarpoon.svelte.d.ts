import { SvelteComponent } from 'svelte';

export interface ArrowUpDownCircleHarpoonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpDownCircleHarpoon extends SvelteComponent<ArrowUpDownCircleHarpoonProps> {}
