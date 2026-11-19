import { SvelteComponent } from 'svelte';

export interface ArrowRightSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRightSlim extends SvelteComponent<ArrowRightSlimProps> {}
