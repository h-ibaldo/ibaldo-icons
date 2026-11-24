import { SvelteComponent } from 'svelte';

export interface ArrowDownArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownArc extends SvelteComponent<ArrowDownArcProps> {}
