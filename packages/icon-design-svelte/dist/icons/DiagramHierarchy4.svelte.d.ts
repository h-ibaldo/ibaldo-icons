import { SvelteComponent } from 'svelte';

export interface DiagramHierarchy4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramHierarchy4 extends SvelteComponent<DiagramHierarchy4Props> {}
