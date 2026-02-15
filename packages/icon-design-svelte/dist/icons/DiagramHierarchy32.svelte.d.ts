import { SvelteComponent } from 'svelte';

export interface DiagramHierarchy32Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramHierarchy32 extends SvelteComponent<DiagramHierarchy32Props> {}
