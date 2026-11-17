import { SvelteComponent } from 'svelte';

export interface DiagramTreeIndentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramTreeIndent extends SvelteComponent<DiagramTreeIndentProps> {}
