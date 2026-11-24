import { SvelteComponent } from 'svelte';

export interface ArrowCyclePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCyclePlus extends SvelteComponent<ArrowCyclePlusProps> {}
