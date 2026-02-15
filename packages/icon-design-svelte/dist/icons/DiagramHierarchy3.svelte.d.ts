import { SvelteComponent } from 'svelte';

export interface DiagramHierarchy3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramHierarchy3 extends SvelteComponent<DiagramHierarchy3Props> {}
