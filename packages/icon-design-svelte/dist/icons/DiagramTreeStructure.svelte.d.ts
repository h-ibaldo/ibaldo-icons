import { SvelteComponent } from 'svelte';

export interface DiagramTreeStructureProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramTreeStructure extends SvelteComponent<DiagramTreeStructureProps> {}
