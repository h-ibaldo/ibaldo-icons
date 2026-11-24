import { SvelteComponent } from 'svelte';

export interface PenToolBezierProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PenToolBezier extends SvelteComponent<PenToolBezierProps> {}
