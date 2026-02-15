import { SvelteComponent } from 'svelte';

export interface DiagramHorizontal2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramHorizontal2 extends SvelteComponent<DiagramHorizontal2Props> {}
