import { SvelteComponent } from 'svelte';

export interface DiagramHierarchy42Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramHierarchy42 extends SvelteComponent<DiagramHierarchy42Props> {}
