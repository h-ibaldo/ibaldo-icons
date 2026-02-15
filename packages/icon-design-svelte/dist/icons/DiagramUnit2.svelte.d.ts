import { SvelteComponent } from 'svelte';

export interface DiagramUnit2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramUnit2 extends SvelteComponent<DiagramUnit2Props> {}
