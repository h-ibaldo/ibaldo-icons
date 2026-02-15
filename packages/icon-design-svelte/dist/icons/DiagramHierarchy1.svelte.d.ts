import { SvelteComponent } from 'svelte';

export interface DiagramHierarchy1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramHierarchy1 extends SvelteComponent<DiagramHierarchy1Props> {}
