import { SvelteComponent } from 'svelte';

export interface ArrowUpCircleInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpCircleIn extends SvelteComponent<ArrowUpCircleInProps> {}
