import { SvelteComponent } from 'svelte';

export interface DiagramMindMap2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramMindMap2 extends SvelteComponent<DiagramMindMap2Props> {}
