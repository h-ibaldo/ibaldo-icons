import { SvelteComponent } from 'svelte';

export interface DiagramHierarchy2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramHierarchy2 extends SvelteComponent<DiagramHierarchy2Props> {}
