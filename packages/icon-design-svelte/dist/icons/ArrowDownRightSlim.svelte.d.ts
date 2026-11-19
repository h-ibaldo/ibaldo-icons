import { SvelteComponent } from 'svelte';

export interface ArrowDownRightSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownRightSlim extends SvelteComponent<ArrowDownRightSlimProps> {}
