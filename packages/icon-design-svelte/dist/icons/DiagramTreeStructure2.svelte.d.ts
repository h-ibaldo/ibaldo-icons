import { SvelteComponent } from 'svelte';

export interface DiagramTreeStructure2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramTreeStructure2 extends SvelteComponent<DiagramTreeStructure2Props> {}
