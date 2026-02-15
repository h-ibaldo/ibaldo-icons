import { SvelteComponent } from 'svelte';

export interface DiagramMindMapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramMindMap extends SvelteComponent<DiagramMindMapProps> {}
